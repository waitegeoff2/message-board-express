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

module.exports = {
  getMessages,
  postMessage
};