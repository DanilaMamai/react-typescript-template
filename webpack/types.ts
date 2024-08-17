type Env = {
  mode: "none" | "development" | "production",
};

type Paths = {
  entry: string;
  output: string;
  public: string;
};

export type WebpackOptions = {
  env: Env;
  paths: Paths;
};
