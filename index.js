const express = require("express");

const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log("Server started at ", PORT));

console.log("Starting the servers.. ");
