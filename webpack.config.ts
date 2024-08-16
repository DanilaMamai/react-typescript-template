import path from "path";
import webpack from "webpack";

type Env = {
  mode: "none" | "development" | "production",
};

const config = (env: Env): webpack.Configuration => ({
  mode: env.mode ?? "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }
});

export default config;
