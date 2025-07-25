const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    user VARCHAR ( 255 ),
    added DATETIME DEFAULT GETDATE()
);

INSERT INTO messages (text, user)
VALUES
('Hello dude', 'Geoff),
('Hello man', 'Jim');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.DB_HOST, // or wherever the db is hosted
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT // The default port
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();