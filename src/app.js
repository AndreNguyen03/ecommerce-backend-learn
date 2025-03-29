import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();
const app = express();

// init middleware
app.use(morgan(`dev`));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//init db
import "./dbs/init.mongodb.js";
import check from "./helpers/check.connect.js";
check.checkOverLoad();

// init routes
app.use("/", router);

// handling error
app.use((req, res, next) => {
  const error = new Error(`Not Found`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: `error`,
    code: statusCode,
    message: error.message || `Internal Server Error`,
  });
});

export default app;
