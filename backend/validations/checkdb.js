const db = require("../db/dbConfig");


// const checkDB = (req, res, next) => {
//     if (db) {
//       return next();
//     } else {
//       res.status(500).json({ error: "Mock server error" });
//     }
//   };
  const checkCreate = (req, res, next) => {
    if (req.body.name&&req.body.description) {
      return next();
    } else {
      res.status(400).json({ error: "Name or description is missing" });
    }
  };
  const checkUpdate = (req, res, next) => {
    if (req.body.name&&req.body.description) {
      return next();
    } else {
      res.status(400).json({ error: "Name or description is missing" });
    }
  };
  const checkExistence = (req, res, next) => {
    if (req.params) {
      return next();
    } else {
      res.status(404).json({ error: "No element" });
    }
  };

  module.exports = {checkExistence,checkCreate,checkUpdate };
