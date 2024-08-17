import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import { buildLoaders, buildPlugins, buildResove } from "./utils";
import { WebpackOptions } from "./types";

const devServer: webpackDevServer.Configuration = {
  port: "3000",
  open: true,
};

const buildWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { env, paths } = options;

  const mode = env.mode ?? "development";
  const isDev = mode === "development";
  const isProd = mode === "production";

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(paths.src, "index.tsx"),
    output: {
      path: paths.output,
      filename: "[name].[hash].js",
      clean: true,
    },
    plugins: buildPlugins(options, isProd),
    module: buildLoaders(),
    resolve: buildResove(options),
  };

  if (isDev) {
    config.devServer = devServer;
    config.devtool = "inline-source-map";
  }

  return config;
};

export { buildWebpackConfig };
