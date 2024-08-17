import path from "path";

import { buildWebpackConfig, WebpackOptions } from "./webpack";

export default (env: WebpackOptions["env"]) => {
  return buildWebpackConfig({
    env,
    paths: {
      output: path.resolve(__dirname, "build"),
      public: path.resolve(__dirname, "public"),
      src: path.resolve(__dirname, "src"),
    }
  });
};
