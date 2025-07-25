const { Router } = require("express");
const indexRouter = Router();
let iDCount = 4;
const indexController = require('../controllers/indexController')

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

//home page
indexRouter.get('/', indexController.getMessages);

//new message form
indexRouter.get('/new', (req, res) => {
    res.render("form")
})

//error page
indexRouter.get('/404', (req, res) => {
    res.render("404")
})

//display each message by id
indexRouter.get('/messages/:messageId', (req, res) => {
    const thisMessageId = req.params.messageId;
    //find that message in here based on its id and then render it
    const message = messages.filter((message) => ((message.id == thisMessageId)))

    if(message[0] == null) {
        res.redirect('/404');
    }

    res.render("message", { message: message })
})

//post new message with form
indexRouter.post('/new', indexController.postMessage)

module.exports = indexRouter;
