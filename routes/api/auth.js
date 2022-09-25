const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, userLoginValidator } = require("../../db/models/User");
const validateData = require("../../middleware/validateData");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.post("/", validateData(userLoginValidator), async (req, res) => {
  const data = req.body;
  const user = await User.findOne({ email: data.email });
  if (!user) {
    return res
      .status(400)
      .send({ error: "Username or password incorrect.", ok: false });
  }
  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) {
    return res
      .status(400)
      .send({ error: "Username or password incorrect.", ok: false });
  }
  const token = user.generateAuthToken();
  res.status(200).send({ token, ok: true });
});

router.get("/:id", [auth, admin], async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user)
    return res
      .status(400)
      .send({ error: "Invalid email or password.", ok: false });
  res.status(200).send({ user, ok: true });
});

module.exports = router;
