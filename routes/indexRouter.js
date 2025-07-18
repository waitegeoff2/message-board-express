const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hello dude",
        user: "Geoff",
        added: new Date()
    },
    {
        text: "Hello man",
        user: "Jim",
        added: new Date()
    },
    {
        text: "Hello there",
        user: "Jon",
        added: new Date()
    },
]

indexRouter.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.get('/new', (req, res) => {
    res.render("form")
})

module.exports = indexRouter;

// add routes for / and /new

