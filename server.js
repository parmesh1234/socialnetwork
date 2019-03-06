const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hell");
});

//use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});
