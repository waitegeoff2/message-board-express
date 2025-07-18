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

indexRouter.post('/new', (req, res) => {
    //the contents of your form, when posted here, will show up 
    //as req.body.NAME OF INPUT
    console.log(req.body.message)
    const userName = req.body.userName;
    const messageText = req.body.message;

    messages.push({ text: messageText, user: userName, added: new Date() })

    res.redirect('/')

    // res.send('hi') NOT SURE WHAT TO PUT HERE, start at step 6
})

module.exports = indexRouter;

// add routes for / and /new

