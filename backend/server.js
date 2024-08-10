// DEPENDENCIES 
const app = require('./app');
require('dotenv').config();

// CONFIGURATION
require("dotenv").config()
const PORT = process.env.PORT || 3000;

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})