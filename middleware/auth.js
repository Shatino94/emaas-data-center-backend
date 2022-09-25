const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token);
  if (!token)
    return res.status(401).send("Access denied: No auth token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.status(400).send("Access denied: Invalid auth token provided.");
  }
};

module.exports = auth;
