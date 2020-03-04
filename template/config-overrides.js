const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    react$: path.resolve(__dirname, "node_modules/react"),
    "react-dom$": path.resolve(__dirname, "node_modules/react-dom")
  })
);
