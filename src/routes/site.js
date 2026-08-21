const express = require("express");
const route = express.Router();

const sitecontroller = require("../app/controller/SiteController");
route.get("/seacher", sitecontroller.search);
route.get("/", sitecontroller.index);

module.exports = route;
