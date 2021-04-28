const Video = require("../../models/Video")

module.exports = async (req, res, next) => {
    const video = await Video.findById(req.params.id);

    if (!video) {
        throw new Error("Invalid Id")
    }

    const index = req.user.dislikedVideos.indexOf(req.params.id)
    if (index == -1) {
        video.dislikes += 1;
        req.user.dislikedVideos.push(req.params.id)

        const temp = req.user.likedVideos.indexOf(req.params.id)
        if (temp > -1) {
            video.likes -= 1
            req.user.likedVideos.splice(temp, 1)
        }

        video.save()
        req.user.save()
    }
    else {
        video.dislikes -= 1;
        req.user.dislikedVideos.splice(index, 1)

        video.save()
        req.user.save()
    }

    return res.json({ success: true, data: {} })
}