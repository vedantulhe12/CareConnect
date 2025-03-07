import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import path from "path";

//Routers
import doctorRouter from "./routes/doctorRoutes.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import patientRouter from "./routes/patientRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

const JWT_SECRET = "c6ecf28ba7bc49a92e978b845f1332618347208e76c84e3d35a85252635084be";
console.log("JWT_SECRET:", JWT_SECRET);


// Log the MONGO_URI for debugging
console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/appts/", appointmentRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/upload", uploadRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`.yellow.bold);
});
