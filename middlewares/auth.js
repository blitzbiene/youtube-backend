const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.protect = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).send("Login to continue")
    }
    try {
        const decoded = jwt.verify(req.headers.authorization.trim(), 'ahohfdsaosdf')

        const user = await User.findOne({ _id: decoded.userId }, '-password')
        req.user = user
    }
    catch (e) {
        return res.status(401).send(e.message)
    }

    next()
}