import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import { buildLoaders, buildPlugins } from "./utils";
import { WebpackOptions } from "./types";

const devServer: webpackDevServer.Configuration = {
  port: "3000",
  open: true,
};

export const getWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { env, paths } = options;

  const isDev = env.mode === "development";

  const devtool = isDev ? "inline-source-map" : false;

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    devServer,
    devtool,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[hash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    }
  }

  return config;
};
