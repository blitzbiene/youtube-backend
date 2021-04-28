const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.protect = async (req, res, next) => {

    if (!req.headers.authorization) {
        throw new Error("Auth token not found")
    }
    const decoded = jwt.verify(req.headers.authorization.trim(), 'ahohfdsaosdf')

    const user = await User.findOne({ _id: decoded.userId }, '-password')
    req.user = user

    next()
}