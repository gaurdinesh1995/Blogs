import { DevEnvironment } from "./Dev.env";
import { ProdEnvironment } from "./Prod.env";

export interface Environment {
  db_url: string;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === "production") {
    return ProdEnvironment;
  }
  return DevEnvironment;
}
