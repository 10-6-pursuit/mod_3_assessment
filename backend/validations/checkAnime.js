// check for name
function checkName(req, res, next) {
  if (req.body.name) {
    return next()
  } else {
      res.status(400).json({ error: "Name is required"})
  }
}

// check for description
function checkDescription(req, res, next) {
  if (req.body.description) {
    return next()
  } else {
      res.status(400).json({ error: "Description is required"})
  }
}

module.exports = {
  checkName,
  checkDescription
}