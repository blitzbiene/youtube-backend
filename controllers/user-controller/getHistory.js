const User = require("../../models/User")

exports.getHistory = async (req, res, next) => {
    const user = await User.findById(req.user.id, 'viewedVideos')
        .populate('viewedVideos')

    return res.json({ success: true, data: user.viewedVideos })
}