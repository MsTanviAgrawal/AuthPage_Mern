import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/auth.js";

const router = Router();

const { verifyUser, verifyAnyUser } = authMiddleware;

const {
  registerUser,
  loginUser,
  getVerifyState,
  getUserProfile,
  getDashboardState
} = authController;

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", verifyAnyUser, getVerifyState);
router.get("/profile", verifyAnyUser, getUserProfile);
router.get("/dashboard", verifyUser, getDashboardState);

export default router;
