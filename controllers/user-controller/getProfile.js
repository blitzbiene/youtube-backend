const { isValidObjectId } = require("mongoose");
const User = require("../../models/User");

exports.getProfile = async (req, res, next) => {
    const user = await User.findById(req.params.id, '-__v -password')

    if (!user) {
        throw new Error("Invalid User Id")
    }
    return res.json({ success: true, data: user })

}