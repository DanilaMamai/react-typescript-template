import HtmlLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

import { WebpackOptions } from "./types";

const buildLoaders = (): webpack.ModuleOptions => {
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    loader: "file-loader",
    options: {
      outputPath: "assets/fonts",
    },
  };

  const imagesLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    loader: "file-loader",
    options: {
      outputPath: "assets/images",
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return { rules: [fontsLoader, imagesLoader, tsLoader] };
};

const buildPlugins = (options: WebpackOptions) => [
  new HtmlLWebpackPlugin({
    template: path.resolve(options.paths.public, "index.html"),
    favicon: path.resolve(options.paths.public, "favicon.png"),
  }),
  new webpack.ProgressPlugin(),
];

const buildResove = (options: WebpackOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: { "@": options.paths.src },
  };
};

export { buildLoaders, buildPlugins, buildResove };
