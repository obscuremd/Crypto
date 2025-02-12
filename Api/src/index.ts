import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoute from "./Routes/UserRoute";
import HistoryRoute from "./Routes/HistoryRoute";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

const mongoUrl = process?.env?.MONGO_URL;
if (!mongoUrl) {
  throw new Error("MONGO_URL environment variable is not defined");
}

// connect to mongoose
mongoose.connect(mongoUrl);
mongoose.connection.on("connected", () => {
  console.log("mongoDB connection established");
});
mongoose.connection.on("error", () => {
  console.log("connection error");
});

// middleware
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        [
          "https://crypto-backend-six.vercel.app",
          "https://www.corewealthierinvestment.com",
          "http://localhost:5173",
          "http://localhost:5174",
          "https://crypto12-iota.vercel.app",
          "https://eaglecountybank.vercel.app",
        ].includes(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies and credentials
  })
);
app.use(express.json());
app.use(cookieParser());
// app.use(
//   express.static("public", {
//     setHeaders: (res, path, stat) => {
//       if (path.endsWith(".js")) {
//         res.setHeader("Content-Type", "application/javascript");
//       }
//     },
//   })
// );

// Routes
app.get("/", (req, res) => {
  res.send("Welcome hello worldss");
});
app.use("/user", UserRoute);
app.use("/history", HistoryRoute);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

export default app;
