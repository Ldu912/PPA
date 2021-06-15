const expres = require("express");
require("dotenv").config({ path: `./config/.env` });

const app = expres();

app.listen(process.env.PORT, () => {
  console.log(`je suis sur le port ${process.env.PORT}`);
});
