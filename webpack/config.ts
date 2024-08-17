import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import { buildLoaders, buildPlugins, buildResove } from "./utils";
import { WebpackOptions } from "./types";

const devServer: webpackDevServer.Configuration = {
  port: "3000",
  open: true,
};

export const getWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { env, paths } = options;

  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[hash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResove(options),
  }

  if (isDev) {
    config.devServer = devServer;
    config.devtool = "inline-source-map";
  }

  return config;
};
