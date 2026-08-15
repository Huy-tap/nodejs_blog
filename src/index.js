const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));
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
app.get("/newsss", (req, res) => {
  res.render("newss");
});
// console.log("pasth", path.join(__dirname, "resoueses", "views"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
