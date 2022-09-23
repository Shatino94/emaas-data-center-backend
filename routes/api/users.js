const Joi = require('joi')
const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const validateData = require('../../middleware/validateData')
const validateWith = require('../../middleware/validation')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const { User, userValidator } = require('../../db/models/User')

const userFound = async(userData, res) => {
    const user = await User.findOne({ email: userData.email })
    if (user) {
        res.status(400).send('Email already has an account.')
        return true
    }
    return false
}

const updateSchema = {
    name: Joi.string().required().min(2),
    phoneNumber: Joi.number().required(),
    image: Joi.string().required(),
};

router.get('/me', auth, async(req, res) => {
    const user = await User.findById(req.user._id).select(['-password', '-__v'])
    res.send(user)
})

router.post('/', validateData(userValidator), async(req, res) => {
    const data = req.body
    const userIsFound = await userFound(data, res)
    if (userIsFound) return

    const newUser = new User(_.pick(data, ['name', 'email']))
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    newUser.password = hashedPassword
    await newUser.save()
    const token = newUser.generateAuthToken()
    res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(_.pick(newUser, ['_id', 'name', 'email']))
})

router.put("/", [auth, validateWith(updateSchema)], async(req, res) => {
    const user = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        image: req.body.image,
    };
    if (req.user) user.email = req.user.email;
    await User.update(user);
    res.status(201).send(user);
});


module.exports = router