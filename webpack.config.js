/* eslint-env node */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const webpack = require("webpack"); // does this have a purpose? or can it just get deleted?
const packageData = require("./package.json");
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  entry: {
    // Define files webpack will emit, does not need to correspond 1:1 with every typescript file
    // You need an emitted file for each entrypoint into your code, e.g. the main script and the ccs or ccs consult script it calls
    InstantSCCS: "./src/main.ts",
  },
  // Turns on tree-shaking and minification in the default Terser minifier
  // https://webpack.js.org/plugins/terser-webpack-plugin/
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "KoLmafia", "scripts", packageData.name),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    // Disable compression because it makes debugging more difficult for KolMafia
    minimize: false,
  },
  performance: {
    // Disable the warning about assets exceeding the recommended size because this isn't a website script
    hints: false,
  },
  plugins: [],
  externals: {
    // Necessary to allow kolmafia imports.
    kolmafia: "commonjs kolmafia",
    // Add any ASH scripts you would like to use here to allow importing. E.g.:
    // "canadv.ash": "commonjs canadv.ash",
  },
};
