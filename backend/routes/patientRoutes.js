import express from "express";
const patientRouter = express.Router();

const JWT_SECRET = "c6ecf28ba7bc49a92e978b845f1332618347208e76c84e3d35a85252635084be"; // Hardcoded key
console.log("JWT_SECRET in login route:", JWT_SECRET);

import { admin, protect } from "../middleware/authMiddleware.js";
import {
  authPatient,
  getAllPatients,
  getPatientById,
  getPatientProfile,
  registerPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

patientRouter.route("/login").post(authPatient);
patientRouter.route("/profile/:id").get(getPatientProfile);
patientRouter
  .route("/:id")
  .get(protect, getPatientById)
  .put(protect, updatePatient)
  .delete(protect, deletePatient);
patientRouter
  .route("/")
  .get(protect, admin, getAllPatients)
  .post(registerPatient);

export default patientRouter;
