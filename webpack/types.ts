type Env = {
  mode: "none" | "development" | "production",
};

type Paths = {
  entry: string;
  html: string;
  output: string;
};

export type WebpackOptions = {
  env: Env;
  paths: Paths;
};
