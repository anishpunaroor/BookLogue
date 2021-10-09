import express, { Router } from "express"; 
import { isSignedIn } from "../middleware/auth.js";
import { getToken, processPayment } from "./../controllers/payment.js"; 

const router = express.Router();

router.route("/getToken").get(isSignedIn, getToken); 
router.route("/").post(isSignedIn, processPayment); 

export default router; 