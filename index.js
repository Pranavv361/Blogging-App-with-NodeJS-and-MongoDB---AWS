const express = require("express");
const path = require("path");

const userRoute = require("./routes/user");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

// Start the server on port 8000
app.listen(PORT, () => console.log("Server started at ", PORT));

console.log("Starting the servers.. ");
