const User = require("../../models/User")

exports.getLikedVideos = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id, 'likedVideos')
            .populate('likedVideos')

        return res.json({ success: true, data: user.likedVideos })
    }
    catch (e) {
        res.status(400).json({ success: false, message: e.message })
    }
}