require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const checkForAuthenticationCookie = require("./middlewares/authentication");


const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

// Connect to MongoDB database. Replace "localhost:27017" with your MongoDB server's connection string.
const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)  // Local URL = mongodb://localhost:27017/blogit!
  .then((e) => console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

// Define the home route and render the home page.
app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// Start the server on port 8000
app.listen(PORT, () => console.log("Server started at ", PORT));

