const db = require("../db/queries")

async function getMessages(req, res) {
    const messages = await db.retrieveMessages();
    console.log(messages)
    res.render("index", { title: "Mini Messageboard", messages: messages })
}

async function postMessage(req, res) {
     //the contents of your form, when posted here, will show up 
    //as req.body.NAME OF INPUT
    const messageText = req.body.message;
    const userName = req.body.userName;
    //take these values and pass into and update db with this
    await db.newMessage(messageText, userName);

    res.redirect('/')
}

async function getMessageInfo(req, res) {
    const thisMessageId = req.params.messageId;
    //find that message in database and return it
    const message = await db.findMessage(thisMessageId)

    if(message[0] == null) {
        res.redirect('/404');
    }

    res.render("message", { message: message })
}

module.exports = {
  getMessages,
  postMessage,
  getMessageInfo
};