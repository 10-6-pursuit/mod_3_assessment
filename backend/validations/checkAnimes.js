const checkName = (req, res, next) => {
    if (req.body.name) {
        console.log("name is ok");
        next();
    } else {
        res.status(400).json({ error: { "id": 20, "name": "test",  "description": "this is anime"} })
    }
};

const checkDescription = (req, res, next) => {
    if (req.body.description) {
        next();
    }else {
        res.status(400).json({ error: { "id": 20, "name": "test",  "description": "this is anime"} })
     }
    };



module.exports = { checkName, checkDescription }