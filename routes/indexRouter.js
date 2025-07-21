const { Router } = require("express");
const indexRouter = Router();
let iDCount = 4;

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

indexRouter.get('/messages/:messageId', (req, res) => {
    const thisMessageId = req.params.messageId;
    //find that message id in here and render it
    const message = messages.filter((message) => (message.id == thisMessageId))
    console.log(message)
    res.render("message", { message: message })

    // res.render("message")
})

indexRouter.post('/new', (req, res) => {
    //the contents of your form, when posted here, will show up 
    //as req.body.NAME OF INPUT
    const userName = req.body.userName;
    const messageText = req.body.message;
    const messageId = iDCount++; 

    messages.push({ text: messageText, user: userName, added: new Date(), id: messageId })
    console.log(messages)

    res.redirect('/')
})

module.exports = indexRouter;

// add routes for / and /new

