const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
// const sequelize = require('./config/connection');
//PRETTY sure I'm not supposed to use sequelize & models, even though we went over them before this assignment is due. This is the unit 12 assignment, those are for unit 13, etc etc. >:(
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
//actually not sure I need public? maybe adjust later
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// shouldn't need homepage route
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"))
// })

//All other routes are directed elsewhere
app.use("/", routes);


//sequelize boilerplate stuff WOULD go here, wrapping around the app.listen. BUT IT'S NOT FOR THIS ASSIGNMENT. 
app.listen(PORT, () => console.log('Now listening'));
