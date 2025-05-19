import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";  // ✅ CORS is needed to allow frontend to access backend
import route from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors()); // <-- This fixes the "Network Error" in most frontend calls
app.use(bodyParser.json()); // To parse JSON body requests

// ✅ API Routes
app.use("/api/user", route);

// ✅ MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Database connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("❌ MongoDB connection error:", error));
