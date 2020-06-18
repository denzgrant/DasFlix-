const mysql = require("mysql");
const util = require("util");

let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "projecttwo_db",
  });
};

connection.connect((error) => {
  if (error) {
    throw error;
  }

  console.log(`Connected to database as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
