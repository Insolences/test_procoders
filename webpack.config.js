// const path = require("path");
// const APP_DIR = path.resolve(__dirname, "src");
// const OUTPUT_DIR = path.resolve(__dirname, "dist");
//
// module.exports = {
//   entry: {
//     index: `${APP_DIR}/index.js`,
//   },
//   output: {
//     path: OUTPUT_DIR,
//     filename: "[name].[hash].bundle.js",
//     publicPath: path.resolve(__dirname, "/"),
//     globalObject: "this",
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         include: path.join(__dirname, "src"),
//         loader: "react-hot!babel",
//       },
//       {
//         test: /\.scss$/,
//         include: path.join(__dirname, "sass"),
//         loaders: ["style", "css?sourceMap", "sass?sourceMap"],
//       },
//       {
//         test: /\.(png|jpg)$/,
//         include: path.join(__dirname, "img"),
//         loader: "url-loader?limit=1000000",
//       }, // inline base64 URLs for <=10mb images, direct URLs for the rest
//     ],
//   },
// };
