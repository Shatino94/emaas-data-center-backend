const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 255,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 7,
        max: 255,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
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
    isAdmin: {
        type: Boolean,
    },
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({
            _id: this._id,
            isAdmin: this.isAdmin,
            name: this.name,
            phoneNumber: this.phoneNumber,
            email: this.email,
            image: this.image || ""
        },
        process.env.JWT_SECRET,
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
        phoneNumber: Joi.number().required(),
        image: Joi.string().min(1).max(255),
        isAdmin: Joi.boolean().required(),
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
};