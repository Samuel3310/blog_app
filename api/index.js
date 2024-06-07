import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/user", authRoute);

app.listen(4000, (req, res) => {
  console.log("Server listening on port 4000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Ïnternal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
