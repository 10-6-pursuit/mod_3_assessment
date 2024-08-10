const pgp = require("pg-promise")(); // the pg-promise will act as a client and make request to the database for the info
require("dotenv").config(); //this will import/require dotenv and config it to use the process.env method on variables in the .env file


const { PG_HOST, PG_USER, PG_PORT, PG_DATABASE } = process.env;

//create a connection object here
const cn = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  allowExitOnIdle: true,
};


//pass it into the pgp function the connection object to make database instance
const db = pgp(cn);

//check the status of the connection to the database 

module.exports = db;
