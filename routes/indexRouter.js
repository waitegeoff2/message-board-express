const { Router } = require("express");
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send("home page")
})

module.exports = indexRouter;

// add routes for / and /new

