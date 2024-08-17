import HtmlLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import { WebpackOptions } from "./types";

const buildLoaders = (options: WebpackOptions): webpack.ModuleOptions => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return { rules: [tsLoader] };
};


const buildPlugins = (options: WebpackOptions) => ([
  new HtmlLWebpackPlugin({ template: options.paths.html }),
  new webpack.ProgressPlugin()
]);

export { buildLoaders, buildPlugins };
