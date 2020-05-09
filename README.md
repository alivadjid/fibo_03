# fibo_03
Application calculate value from Fibbonachi line. In first page client input number. At the second page client see results from MySQL.

Application consists:

Front: React

Back: Nodejs

Database: MySQL

For run project in Linux:

Install applications:
1. sudo apt install git
2. sudo apt install nodejs
3. sudo apt install npm

Clone git repository in folder:

4. git clone https://github.com/alivadjid/fibo_03.git

Install npm packages in backend and frontend:

5. cd fibo_03/backend
6. npm install
7. cd fibo_03/backend/client
8. npm install

Open 2 terminal and start application:

9. cd fibo_03/backend
10. npm start
11. cd fibo_03/backend/client
12. npm run dev

See result in: localhost:3000

To start test write
npm test

Application pushed to docker

docker alivadjid/fibo-front:0.0.1

docker alivadjid/fibo-back:0.0.1
