const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

// Controller 1: User Registration
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ $or: [{ email }, { name }] });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email or name already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    await UserModel.create({ name, email, password: hash });
    res.json({ status: "OK" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller 2: User Session Login Authentication
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const secretKey = process.env.JWT_SECRET || "jwt-secret-key";

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign(
          { email: user.email, role: user.role, name: user.name },
          secretKey,
          { expiresIn: "1d" }
        );
        res.cookie("token", token, { httpOnly: true });
        return res.json({ status: "Success", role: user.role, name: user.name });
      } else {
        return res.status(401).json("The password is incorrect");
      }
    } else {
      return res.status(404).json("No record existed");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller 3: Profiles and Verifications Fetch Helpers
const getVerifyState = (req, res) => {
  res.json({ message: "Success", role: req.user.role, name: req.user.name });
};

const getUserProfile = (req, res) => {
  res.json({ message: "Success", role: req.user.role, name: req.user.name, email: req.user.email });
};

const getDashboardState = (req, res) => {
  res.json({ message: "Success" });
};

module.exports = {
  registerUser,
  loginUser,
  getVerifyState,
  getUserProfile,
  getDashboardState
};
