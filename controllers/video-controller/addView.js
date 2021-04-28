const Video = require("../../models/Video")

module.exports = async (req, res, next) => {
    const video = await Video.findById(req.params.id);

    if (!video) {
        throw new Error("Invalid Id")
    }

    video.views += 1;
    req.user.viewedVideos.push(req.params.id)

    video.save()
    req.user.save()

    return res.json({ success: true, data: {} })
}