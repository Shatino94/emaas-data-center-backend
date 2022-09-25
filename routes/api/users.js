const Joi = require("joi");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const validateData = require("../../middleware/validateData");
const validateWith = require("../../middleware/validation");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, userValidator } = require("../../db/models/User");
const { request } = require("express");

const userFound = async (userData, res) => {
  const user = await User.findOne({ email: userData.email });
  if (user) {
    res.status(400).send("Email already has an account.");
    return true;
  }
  return false;
};

const updateSchema = {
  name: Joi.string(),
  phoneNumber: Joi.number(),
  image: Joi.string(),
  isAdmin: Joi.boolean(),
  isActive: Joi.boolean(),
};

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).send({ ok: true });
});

router.post("/", validateData(userValidator), async (req, res) => {
  const data = req.body;
  const userIsFound = await userFound(data, res);
  if (userIsFound) return;

  const newUser = new User(
    _.pick(data, [
      "name",
      "email",
      "password",
      "isActive",
      "phoneNumber",
      "isAdmin",
      "image",
    ])
  );
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(data.password, salt);
  newUser.password = hashedPassword;
  await newUser.save();
  const token = newUser.generateAuthToken();
  res.status(200).send({ token, ok: true });
});

router.put("/", [auth, admin, validateWith(updateSchema)], async (req, res) => {
  const user = {
    name: req.body?.name,
    phoneNumber: req.body?.phoneNumber,
    image: req.body?.image,
    isActive: req.body?.isActive,
    isAdmin: req.body?.isAdmin,
  };
  const newUser = new User(
    _.pick(user, ["name", "isActive", "phoneNumber", "isAdmin", "image"])
  );
  if (req.user) user.email = req.user.email;
  await User.findOneAndUpdate({ email: req.user.email }, newUser);
  res.status(201).send({ user, ok: true });
});

router.delete("/", [auth, admin], async (req, res) => {
  await User.findOneAndDelete({ _id: req.query.id });
  res.status(204).send({ ok: true });
});

router.post("/revoke", [auth, admin], async (req, res) => {
  const user = await User.findById(req.query.id);
  user.isActive = false;
  await user.save();
  res.status(200).send({ ok: true });
});

module.exports = router;
