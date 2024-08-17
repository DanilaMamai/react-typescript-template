import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import { buildLoaders, buildPlugins } from "./utils";
import { WebpackOptions } from "./types";

const devServer: webpackDevServer.Configuration = {
  port: "3000",
  open: true,
};

export const getWebpackConfig = (options: WebpackOptions): webpack.Configuration => ({
  mode: options.env.mode ?? "production",
  devServer,
  entry: options.paths.entry,
  output: {
    path: options.paths.output,
    filename: "[name].[hash].js",
    clean: true,
  },
  plugins: buildPlugins(options),
  module: buildLoaders(options),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }
});
