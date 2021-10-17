import jwt from "jsonwebtoken";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "60d",
  });

export default generateToken;
