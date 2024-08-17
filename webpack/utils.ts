import HtmlLWebpackPlugin from "html-webpack-plugin";
import path from "path";;
import webpack from "webpack";

import { WebpackOptions } from "./types";

const buildLoaders = (options: WebpackOptions): webpack.ModuleOptions => {
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const imagesLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return { rules: [tsLoader, fontsLoader, imagesLoader] };
};


const buildPlugins = (options: WebpackOptions) => ([
  new HtmlLWebpackPlugin({
    template: path.resolve(options.paths.public, "index.html"),
    favicon: path.resolve(options.paths.public, "favicon.png"),
  }),
  new webpack.ProgressPlugin()
]);

const buildResove = (options: WebpackOptions): webpack.ResolveOptions => {
  return { extensions: [".tsx", ".ts", ".js"] };
};

export { buildLoaders, buildPlugins, buildResove };
