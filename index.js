
// const path = require("path");
const db = require('./config/connection.js');
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TO DO: inquirer prompts

async function init (){
// call inquirer prompts (also async)

//display according to input/conditionals

};

// app.listen(PORT, () => console.log('Now listening'));
