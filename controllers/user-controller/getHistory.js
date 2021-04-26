const User = require("../../models/User")

exports.getHistory = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id, 'viewedVideos')
            .populate('viewedVideos')

        return res.json({ success: true, data: user.viewedVideos })
    }
    catch (e) {
        res.status(400).json({ success: false, message: e.message })
    }
}