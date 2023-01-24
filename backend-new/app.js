require("dotenv").config();

let express = require("express");

const indexRouter = require("./routes/index");

const app = express();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.SQL_CONNECTION_HOST,
  user: process.env.SQL_CONNECTION_DATABASE_USER,
  password: process.env.SQL_CONNECTION_DATABASE_PASSWORD,
  database: process.env.SQL_CONNECTION_DATABASE_NAME,
});

connection.connect((err) => {
  err ? console.log(err) : console.log("connection ████████████] 99%");
});

app.use("/api", indexRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
