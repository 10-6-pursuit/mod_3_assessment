// DEPENDENCIES -  require/import dependencies
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const {
  getAllAnimes,
  getOneAnime,
  createOneAnime,
  updateOneAnime,
  deleteOneAnime,
} = require("./queries/animes");
const animesController = require("./controllers/animesController");

// CONFIGURATION - create the instance of express server app
const app = express();

// MIDDLEWARE
// app.use(express.json())
app.use(cors()); // cors package allow any client or web browser to make request to this server app
app.use(express.json()); // the json middleware function will allow teh server app to pase incoming request data
app.use(express.urlencoded({ extended: false }));

// ROUTES 
app.get("/", async (req, res) => {
  res.send("In Pursuit of Accelerator 2");
});
app.use("/animes", animesController);



app.get("*", (req, res) => {
  res.status(404).send("The route you are looking for doesn't exist!");
});

// EXPORT
module.exports = app;

