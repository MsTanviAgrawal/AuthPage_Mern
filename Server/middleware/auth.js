const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  const secretKey = process.env.JWT_SECRET || "jwt-secret-key";

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "Error with token" });
    }
    if (decode.role === "admin") {
      req.user = decode;
      next();
    } else {
      return res.status(403).json({ message: "Not admin" });
    }
  });
};

const verifyAnyUser = (req, res, next) => {
  const token = req.cookies.token;
  const secretKey = process.env.JWT_SECRET || "jwt-secret-key";

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "Error with token" });
    }
    req.user = decode;
    next();
  });
};

module.exports = { verifyUser, verifyAnyUser };
