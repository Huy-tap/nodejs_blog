const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

// Middleware để xử lý dữ liệu từ form
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

//template enginer
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    partialsDir: path.join(
      __dirname,
      "resouses",
      "views",
      "layouts",
      "partial",
    ),
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resouses", "views"));
app.get("/", (req, res) => {
  res.render("home");
});
// newss
app.get("/newsss", (req, res) => {
  res.render("newss");
});
// seacher
app.get("/seacher", (req, res) => {
  res.render("seacher");
});
// seacher
app.post("/seacher", (req, res) => {
  console.log(req.body);
  res.send("");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
