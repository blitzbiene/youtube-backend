const User = require("../../models/User")

exports.getLikedVideos = async (req, res, next) => {
    const user = await User.findById(req.user.id, 'likedVideos')
        .populate('likedVideos')

    return res.json({ success: true, data: user.likedVideos })
}