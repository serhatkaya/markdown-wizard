const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: "sk",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  mode: "production",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "LICENSE"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "README.md"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "package.json"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "src/markdown-wizard.d.ts"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
  module: { // Add the "module" object for specifying rules
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"], // Allow importing .ts files without specifying the extension
  },
};
