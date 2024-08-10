// DEPENDENCIES - this requires server app from app.js
const app = require('./app');

// CONFIGURATION - this will import dotenv package and config it to use process.env on PORT variable in the .env file
require("dotenv").config()
const PORT = process.env.PORT;

// LISTEN - the server app is listening on the port for any request
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});
