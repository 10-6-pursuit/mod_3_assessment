const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkDescription = (req, res, next) => {
  if (req.body.description) {
    next();
  } else {
    res.status(400).json({ error: "Description required" });
  }
};

module.exports = { checkName, checkDescription };
