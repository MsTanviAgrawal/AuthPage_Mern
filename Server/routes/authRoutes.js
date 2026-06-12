const express = require("express");
const router = express.Router();
const { verifyUser, verifyAnyUser } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  getVerifyState,
  getUserProfile,
  getDashboardState
} = require("../controllers/authController");

// Public Action Pipelines
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private Secured Authenticated Access Slots
router.get("/verify", verifyAnyUser, getVerifyState);
router.get("/profile", verifyAnyUser, getUserProfile);
router.get("/dashboard", verifyUser, getDashboardState);

module.exports = router;
