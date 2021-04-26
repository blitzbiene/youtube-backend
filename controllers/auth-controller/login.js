const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {validate} = require("../../utils/joiValidate");
const User = require("../../models/User");

exports.logIn = async (req, res, next) => {
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