const pool = require("./pool");

async function retrieveMessages() {
   const { rows } = await pool.query("SELECT * FROM messages")
   console.log(rows) 
   return rows;
}

async function newMessage(text, user) {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [text, user])
}

async function findMessage(messageId) {
    console.log("the id is: ", messageId)
    const { rows } = await pool.query("SELECT * FROM messages WHERE CAST(id as VARCHAR) LIKE $1", [messageId])
    console.log("rows: ", rows)
    return rows;
}

module.exports = {
    retrieveMessages,
    newMessage,
    findMessage
}