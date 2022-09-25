const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 255,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    min: 7,
    max: 255,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: true,
    min: 8,
    max: 255,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      isActive: this.isActive,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
      image: this.image || "",
    },
    process.env.JWT_SECRET
  );
  return token;
};

const User = mongoose.model("User", userSchema);

const userValidator = (data) => {
  const joiOptions = { abortEarly: false };

  const userSchema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(7).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
    phoneNumber: Joi.number(),
    image: Joi.string().min(1).max(255),
    isAdmin: Joi.boolean(),
    isActive: Joi.boolean(),
  });

  const validation = userSchema.validate(data, joiOptions);
  if (validation.error) {
    const error = validation.error.details.map((e) => e.message);
    return { error: error };
  }
  return { error: null };
};

const userLoginValidator = (data) => {
  const joiOptions = { abortEarly: false };

  const userSchema = Joi.object({
    email: Joi.string().min(7).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });

  const validation = userSchema.validate(data, joiOptions);
  if (validation.error) {
    const error = validation.error.details.map((e) => e.message);
    return { error: error };
  }
  return { error: null };
};

module.exports = {
  User,
  userValidator,
  userLoginValidator,
};
