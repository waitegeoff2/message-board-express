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

//home page
indexRouter.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

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
indexRouter.post('/new', (req, res) => {
    //the contents of your form, when posted here, will show up 
    //as req.body.NAME OF INPUT
    const userName = req.body.userName;
    const messageText = req.body.message;
    const messageId = iDCount++; 

    messages.push({ text: messageText, user: userName, added: new Date(), id: messageId })

    res.redirect('/')
})

module.exports = indexRouter;
