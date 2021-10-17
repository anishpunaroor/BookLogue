import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user";

export const isSignedIn = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      let token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).sselect("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  }

  // Check if jwt token exists
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token found");
  }
});

// Check if user is an administrator
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an admin");
  }
};
