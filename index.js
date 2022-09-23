const express = require("express");
const app = express();

require("./startup/cors")(app);
require("./startup/debuggers")();
require("./startup/db")();
require("./startup/prod")(app);
require("./startup/routes")(app);

let port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
