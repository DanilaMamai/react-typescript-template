import path from "path";
import webpack, { ProgressPlugin } from "webpack";
import webpackDevServer from "webpack-dev-server";

import HtmlLWebpackPlugin from "html-webpack-plugin";

type Env = {
  mode: "none" | "development" | "production",
};

const devServer: webpackDevServer.Configuration = {
  port: "3000",
  open: true,
};

const config = (env: Env): webpack.Configuration => ({
  mode: env.mode ?? "development",
  devServer,
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
