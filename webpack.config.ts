import path from "path";
import webpack, { ProgressPlugin } from "webpack";

import HtmlLWebpackPlugin from "html-webpack-plugin";

type Env = {
  mode: "none" | "development" | "production",
};

const config = (env: Env): webpack.Configuration => ({
  mode: env.mode ?? "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    clean: true,
  },
  plugins: [
    new HtmlLWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
    new ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }
});

export default config;
