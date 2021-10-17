import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateDeliveredOrder,
  updatePaidOrder,
} from "../controllers/order";
import { isSignedIn, isAdmin } from "../middleware/auth";

const router = express.Router();

router.route("/").post(isSignedIn, addOrderItems).get(isSignedIn, isAdmin, getOrders);
router.route("/myorders").get(isSignedIn, getMyOrders);
router.route("/:id").get(isSignedIn, getOrderById);
router.route("/:id/pay").put(isSignedIn, updatePaidOrder);
router.route("/:id/deliver").put(isSignedIn, isAdmin, updateDeliveredOrder);

export default router;
