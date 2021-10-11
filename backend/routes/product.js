import express from "express";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./../controllers/product.js";
import { isAdmin, isSignedIn } from "./../middleware/auth.js";

const router = express.Router();

router.route("/").get(getProducts).post(isSignedIn, isAdmin, createProduct);
router.route("/:id/reviews").post(isSignedIn, createProductReview);
router.route("/:id")
  .get(getProductById)
  .delete(isSignedIn, isAdmin, deleteProduct)
  .put(isSignedIn, isAdmin, updateProduct);

export default router;
