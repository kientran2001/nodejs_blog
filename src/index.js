const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const exp = require("constants");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require('./config/db')

// Connect DB
db.connect()

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
