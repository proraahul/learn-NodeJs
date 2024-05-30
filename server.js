const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //get parsed data from frontend and save it to req.body


app.get("/", (req, res) => {
  res.send("welcome to our Hotel");
});

// import the router file
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, () => {
  console.log("listening on port 3000");
});
