const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const app = express();
const PORT = 8000;

mongoose.connect('mongodb://localhost:27017/blogit!').then(e=>console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended:false}));

// Define the home route and render the home page.
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

// Start the server on port 8000
app.listen(PORT, () => console.log("Server started at ", PORT));

console.log("Starting the servers.. ");
