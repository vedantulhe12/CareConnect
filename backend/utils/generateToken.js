import jwt from "jsonwebtoken";

const JWT_SECRET = "c6ecf28ba7bc49a92e978b845f1332618347208e76c84e3d35a85252635084be"; // Hardcoded key

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
