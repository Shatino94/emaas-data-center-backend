const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, userValidator } = require("../../db/models/User");
const validateData = require("../../middleware/validateData");
const auth = require("../../middleware/auth");

router.post("/", validateData(userValidator), async (req, res) => {
  const data = req.body;
  const user = await User.findOne({ email: data.email });
  if (!user) return res.status(400).send("Username or password incorrect.");
  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword)
    return res.status(400).send("Username or password incorrect.");
  const token = user.generateAuthToken();
  res.send(token);
});

router.get("/", auth, async (req, res) => {
  const user = await User.findOne({ email: data.email });
  if (!user)
    return res.status(400).send({ error: "Invalid email or password." });

  const token = jwt.sign(
    {
      userId: user.id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      image: user.image,
      email: user.email,
      isAdmin: user.isAdmin || false,
    },
    "jwtPrivateKey"
  );
  res.send(token);
});

module.exports = router;
