const { Router } = require("express");
const indexRouter = Router();
const indexController = require('../controllers/indexController')

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
indexRouter.get('/messages/:messageId', indexController.getMessageInfo)

//post new message with form
indexRouter.post('/new', indexController.postMessage)

module.exports = indexRouter;
