var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var htmlRoutes = require("./routes/number");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

const session = require("express-session");
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.SQL_CONNECTION_HOST,
  user: process.env.SQL_CONNECTION_USER,
  password: process.env.SQL_CONNECTION_PASSWORD,
  database: process.env.SQL_CONNECTION_DATABASE,
});

connection.connect(function (err) {
  err
    ? console.log(err + "++++++++++//////////////")
    : console.log("connection ████████████] 99%");
});

require("./routes/sql")(app, connection);

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/number", htmlRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
