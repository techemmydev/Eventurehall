import express from "express";
import { dbConnect } from "./db/dbConnect.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/auth.route.js";
import path from "path";
// import { generateToken } from "./utils/generateToken.js";
// Load environment variables
dotenv.config();

// server setup
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// i have my custom domain now
app.use(
  cors({
    origin: ["http://localhost:5173", "https://eventurehall.com"],
    credentials: true,
  })
);
app.use(cookieParser()); // allows us to parse incoming cookies from the client

// Routes
app.use("/api/auth", authRoutes);

// app.all("*", (req, res) => {
//   res.send("Welcome to Event Hall Services.");
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
  next();
});

// Start Server
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
  dbConnect();
});
