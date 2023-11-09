const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const blog = require("./routes/blogs");
var newsLetter = require('./routes/newsLetter')
//basic setup

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/blog", blog);
app.use('/newsLetter',newsLetter)
app.get("/", (req, res) => res.send("OK"));
app.listen(8001, (err) => {  
  if (err) {
    console.log("something went wrong");
  } else {
    console.log("app is listen at port 8001");
  }
});


