const { isValidObjectId } = require("mongoose");
const User = require("../../models/User");

exports.getProfile = async (req, res, next) => {
    try {
        if (!isValidObjectId(req.params.id)) {
            throw new Error("Invalid User Id")
        }
        const user = await User.findById(req.params.id, '-__v')

        if (!user) {
            throw new Error("Invalid User Id")
        }
        console.log(user);
        return res.json({ success: true, data: user })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}