import express from "express";
import {
  authorizeUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/user";
import { isSignedIn, isAdmin } from "../middleware/auth";

const router = express.Router();

// User registration/authorization routes
router.route("/").post(registerUser).get(isSignedIn, isAdmin, getUsers);
router.route("/login").post(authorizeUser);

// Profile routes
router.route("/profile").get(isSignedIn, getUserProfile).put(isSignedIn, updateUserProfile);

// Id routes
router
  .route("/:id")
  .delete(isSignedIn, isAdmin, deleteUser)
  .get(isSignedIn, isAdmin, getUserById)
  .put(isSignedIn, isAdmin, updateUser);

export default router;
