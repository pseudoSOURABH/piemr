const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./db");

const app = express();
const port = 5000;

//using middleware
app.use(express.json())
//Available Routes
app.get("/", (req, res) => {
  res.send("Hello World! i am a programmer.");
});
app.use("/api/auth",require('./routes/auth.js'));
app.use("/api/notes",require('./routes/notes.js'));


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
ConnectToMongo();
