const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundles.js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, ""),
        compress: true,
        port: 9000,
    },
};
