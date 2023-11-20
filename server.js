// const path = require("path");
const db = require('./config/connection.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//this is a command-line application. what would i need routes for?

app.listen(PORT, () => console.log('Now listening'));
