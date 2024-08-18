type Env = {
  mode: "none" | "development" | "production";
};

type Paths = {
  output: string;
  public: string;
  src: string;
};

type WebpackOptions = {
  env: Env;
  paths: Paths;
};

export { type WebpackOptions };
