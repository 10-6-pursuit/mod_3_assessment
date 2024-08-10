const checkName = (req, res, next) => {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({ error: "Name is required" });
    } else {
        return next();
    }
};

// const checkLength = (req, res, next) => {
//     if (req.body.name > 0 && req.body.description > 0) {
//         return next();
//     } else {
//         res.status(400).json({ error: "Name and Description required" });
//     }
// };

module.exports = { checkName };