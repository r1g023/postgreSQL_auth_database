// require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken,
  restrictedUser,
  checkRole,
};

function generateToken(user) {
  let payload = {
    subID: user.id,
    name: user.username,
    email: user.email,
    role: user.role_id,
  };
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

function restrictedUser() {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log("verify token error----->", err);
          res.json({ message: "please verify token, its incorrect" });
        } else {
          console.log("decoded token verify correct---->", decoded);
          req.decodedToken = decoded;
          next();
        }
      });
    } else {
      res.json({ error: "token does not exist, please enter one" });
    }
  };
}

function checkRole(user) {
  return (req, res, next) => {
    if (req.decodedToken.role === 1 || "admin") {
      next();
    } else {
      console.log(
        "not authorized",
        "req.decodedToken.role----->",
        req.decodedToken.role,
        req.decodedToken
      );
      res
        .status(403)
        .json({ message: "you're not an admin, don't have access to this" });
    }
  };
}
