import express from "express";
import { isSignedIn } from "../middleware/auth";
import { getToken, processPayment } from "../controllers/payment";

const router = express.Router();

router.route("/getToken").get(isSignedIn, getToken);
router.route("/").post(isSignedIn, processPayment);

export default router;
