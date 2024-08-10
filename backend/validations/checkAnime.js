const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};
const checkDescription = (req, res, next) => {
  if (req.body.description) {
    return next();
  } else {
    res.status(400).json({ error: "description is required" });
  }
};
const checkBoolean = (req, res, next) => {
  if (
    typeof req.body.is_favorite === "boolean" ||
    req.body.is_favorite === "true" ||
    req.body.is_favorite == undefined ||
    req.body.is_favorite === "false"
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

module.exports = { checkName, checkBoolean, validateURL, checkDescription };
