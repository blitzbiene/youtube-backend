const { findById } = require("../models/User")
const User = require("../models/User")

exports.toggleSubscribe = async (req, res, next) => {
    try {
        if (req.user.id === req.params.id) {
            throw new Error("You cannot subscribe to your own channel")
        }

        const user = await User.findById(id)

        if (!user) {
            throw new Error("Invalid Channel Id")
        }

        user.subscribed.push(req.params.id)

        await user.save()

        return res.json({ success: true, data: {} })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }

}
exports.getFeed = (req, res, next) => {

}
exports.editUser = (req, res, next) => {

}
exports.searchUser = (req, res, next) => {

}
exports.getProfile = (req, res, next) => {

}
exports.recommendChannels = (req, res, next) => {

}
exports.getLikedVideos = (req, res, next) => {

}
exports.getHistory = (req, res, next) => {

}
