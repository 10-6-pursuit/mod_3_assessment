function checkNameAndDescription(req, res, next) {
	if (!req.body.name || !req.body.description) {
		res.status(400).json({ error: "Bad request" });
	} else {
		return next();
	}
}

module.exports = { checkNameAndDescription };
