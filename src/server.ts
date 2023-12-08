import * as express from "express";
import { getEnvironmentVariables } from "./Environments/Env";
import mongoose from "mongoose";
import UserRouter from "./routers/userRouter";
import bodyParser = require("body-parser");

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfiguration();
    this.setRoutes();
    this.Error404Handler();
    this.ErrorHandler();
  }
  setConfiguration() {
    this.connectMongoDB();
    this.configureBodyParser();
  }
  connectMongoDB() {
    let datbseUrl = getEnvironmentVariables().db_url;
    mongoose.connect(datbseUrl).then(() => {
      console.log("Database connected");
    });
  }

  configureBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }
  Error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }
  ErrorHandler() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong please try again",
        status_code: errorStatus,
      });
    });
  }
}
