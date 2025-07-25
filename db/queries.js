const pool = require("./pool");

async function retrieveMessages() {
   const { rows } = await pool.query("SELECT * FROM messages")
   console.log(rows) 
   return rows;
}

async function newMessage(text, user) {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [text, user])
}

module.exports = {
    retrieveMessages,
    newMessage,
}