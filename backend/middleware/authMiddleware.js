import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";

const JWT_SECRET = "c6ecf28ba7bc49a92e978b845f1332618347208e76c84e3d35a85252635084be"; // Hardcoded key

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      console.log("JWT_SECRET:", JWT_SECRET); // Debugging

      const decoded = jwt.verify(token, JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.admin && req.admin.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

const patientMiddleware = (req, res, next) => {
  if (req.patient && req.patient.isPatient) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a patient");
  }
};

const doctorMiddleware = (req, res, next) => {
  if (req.doctor && req.doctor.isDoctor) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a doctor");
  }
};

export { protect, admin, patientMiddleware, doctorMiddleware };
