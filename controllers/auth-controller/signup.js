const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validate } = require("../../utils/joiValidate");
const User = require("../../models/User");

exports.signUp = async (req, res, next) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { email, password, username, firstname, lastname } = req.body

    const userEmail = await User.findOne({ email })
    if (userEmail) throw new Error('Email already exists')

    const userName = await User.findOne({ username })
    if (userName) throw new Error('Username already exists')

    const hashPassword = bcrypt.hashSync(password, 8);
    // const hashPassword = password

    user = new User({
        email, password: hashPassword, firstname, lastname, username
    })


    const savedUser = await user.save()
    return res.json({ success: true, userId: savedUser.id })

}