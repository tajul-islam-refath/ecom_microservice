import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  _res.status(404).json({
    message: "Not found",
  });
});

app.use(
  (
    err: ErrorRequestHandler,
    _req: Request,
    _res: Response,
    _next: NextFunction
  ) => {
    _res.status(500).json({
      message: "Internal server error",
    });
  }
);

const port = process.env.PORT || 4002;
const serviceName = process.env.SERVICE_NAME || "inventory";

app.listen(port, () => {
  console.log(`${serviceName} is running on port ${port}`);
});
