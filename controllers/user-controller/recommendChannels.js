const User = require("../../models/User")

exports.recommendChannels = async (req, res, next) => {
    try {
        const user = await User.find({}, '-password -__v')

        console.log(user);
        // return res.json({ success: true, data: user })
        return res.send(user)
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}