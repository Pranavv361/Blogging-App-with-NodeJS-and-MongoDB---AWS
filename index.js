const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const checkForAuthenticationCookie = require("./controllers/authentication");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

// Connect to MongoDB database. Replace "localhost:27017" with your MongoDB server's connection string.
const app = express();
const PORT = 8000;

mongoose
  .connect("mongodb://localhost:27017/blogit!")
  .then((e) => console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

// Define the home route and render the home page.
app.get("/", (req, res) => {
  res.render("home", {
    user: req.user,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// Start the server on port 8000
app.listen(PORT, () => console.log("Server started at ", PORT));

console.log("Starting the servers.. ");
