import path from "path";

import { getWebpackConfig, WebpackOptions } from "./webpack";

export default (env: WebpackOptions["env"]) => {
  return getWebpackConfig({
    env,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
    }
  });
};
