const newsRoute = require("./news");
const siteRoute = require("./site");
function route(app) {
  //news
  app.use("/news", newsRoute);
  // site
  app.use("/", siteRoute);
}
module.exports = route;
