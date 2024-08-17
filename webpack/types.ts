type Env = {
  mode: "none" | "development" | "production",
};

type Paths = {
  output: string;
  public: string;
  src: string;
};

export type WebpackOptions = {
  env: Env;
  paths: Paths;
};
