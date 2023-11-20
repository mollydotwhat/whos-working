const path = require("path");

const routes = require("./routes");
const db = require('./config/connection.js');

const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// shouldn't need homepage route
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"))
// })

//this is a command-line application. what would i need routes for?



app.listen(PORT, () => console.log('Now listening'));
