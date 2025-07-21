const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hello dude",
        user: "Geoff",
        added: new Date(),
        id: 1,
    },
    {
        text: "Hello man",
        user: "Jim",
        added: new Date(),
        id: 2,

    },
    {
        text: "Hello there",
        user: "Jon",
        added: new Date(),
        id: 3,
    },
]

indexRouter.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

indexRouter.get('/new', (req, res) => {
    res.render("form")
})

indexRouter.get('/message', (req, res) => {
    res.render("message")
})

indexRouter.post('/new', (req, res) => {
    //the contents of your form, when posted here, will show up 
    //as req.body.NAME OF INPUT
    const userName = req.body.userName;
    const messageText = req.body.message;

    messages.push({ text: messageText, user: userName, added: new Date() })

    res.redirect('/')
})

module.exports = indexRouter;

// add routes for / and /new

