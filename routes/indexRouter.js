const { Router } = require("express");
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send("home page")
})

indexRouter.get('/new', (req, res) => {
    res.send("new message")
})

module.exports = indexRouter;

// add routes for / and /new

