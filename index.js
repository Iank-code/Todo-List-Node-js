const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const PostRoute = require("./routes/Post.route");

app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection established"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/todo", PostRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on 3000");
});
