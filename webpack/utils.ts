import HtmlLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import webpackBundleAnalyzer from "webpack-bundle-analyzer";

import { WebpackOptions } from "./types";

const buildLoaders = (): webpack.ModuleOptions => {
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const imagesLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return { rules: [tsLoader, fontsLoader, imagesLoader] };
};

const buildPlugins = (options: WebpackOptions, isProd: boolean) => {
  const plugins = [
    new HtmlLWebpackPlugin({
      template: path.resolve(options.paths.public, "index.html"),
      favicon: path.resolve(options.paths.public, "favicon.png"),
    }),
    new webpack.ProgressPlugin(),
  ];

  if (isProd) {
    plugins.push(new webpackBundleAnalyzer.BundleAnalyzerPlugin());
  }

  return plugins;
};

const buildResove = (options: WebpackOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: { "@": options.paths.src },
  };
};

export { buildLoaders, buildPlugins, buildResove };
