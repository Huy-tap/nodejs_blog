const express = require("express");
const route = express.Router();

const newcontroller = require("../app/controller/NewController");
route.get("/:slug", newcontroller.show);
route.get("/", newcontroller.index);
module.exports = route;
