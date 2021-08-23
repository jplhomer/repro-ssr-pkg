const { renderToString } = require("react-dom/server");

module.exports.render = (app) => {
  return renderToString(app);
};
