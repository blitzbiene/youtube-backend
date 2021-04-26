const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const User = require("../../models/User")

const signUp = async (req, res, next) => {
    try {
        const { error } = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const { email, password, username, firstname, lastname } = req.body

        const userEmail = await User.findOne({ email })
        if (userEmail) throw new Error('Email already exists')

        const userName = await User.findOne({ username })
        if (userName) throw new Error('Username already exists')

        const hashPassword = bcrypt.hashSync(password, 8);

        user = new User({
            email, password: hashPassword, firstname, lastname, username
        })


        const savedUser = await user.save()
        return res.json({ success: true, userId: savedUser.id })

    }
    catch (e) {
        res.status(400).json({ success: false, message: e.message })
    }
}
const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user === null) throw new Error('User not found')

        if (await bcrypt.compare(password, user.password)) {
            const token = await jwt.sign({ userId: user.id }, "ahohfdsaosdf", {
                expiresIn: '24h'
            })
            return res.json({ success: true, token });
        }
        else {
            throw new Error("Password Incorrect")
        }
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(4).max(255).required(),
        firstname: Joi.string().min(4).max(255).required(),
        lastname: Joi.string().min(4).max(255).required()
    });

    return schema.validate(req)
}


module.exports = { signUp, logIn }