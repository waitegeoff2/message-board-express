const express = require("express");
const app = express();
const path = require("node:path");

//STATIC ASSETS
// express.static is a middleware function enabling use of static assets
//we tell this function to look for these assets in the public folder
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//lets our app know where to look for views, and then that we intend to use EJS as a template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`EJS Express app - listening on port ${PORT}!`);
});