const express = require("express");
const bodyParser = require("body-parser");
require(`dotenv`).config({ path: `./config/.env` });
require(`./config/db`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`je suis sur le port ${process.env.PORT}`);
});
