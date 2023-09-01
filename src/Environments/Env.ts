import { DevEnvironment } from "./Dev.env";
import { ProdEnvironment } from "./Prod.env";

export interface Environment {
  db_url: string;
}

function getEnvironmentVariables() {
  if (process.env.NODE_ENV == "prodiction") {
    ProdEnvironment;
  }
  DevEnvironment;
}
