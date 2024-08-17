import path from "path";

import { getWebpackConfig, WebpackOptions } from "./webpack";

export default (env: WebpackOptions["env"]) => {
  return getWebpackConfig({
    env,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      public: path.resolve(__dirname, "public"),
    }
  });
};
