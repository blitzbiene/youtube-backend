const Video = require("../../models/Video")
const { validateVideo } = require("../../utils/joiValidate")

module.exports = async (req, res, next) => {
    const { error } = validateVideo(req.body)
    if (error) {
        throw new Error(error.details[0].message)
    }

    const video = new Video(req.body)
    video.uploadedBy = req.user.id

    const savedVideo = await video.save()
    req.user.videos.push(savedVideo.id)
    req.user.save()

    return res.json({ success: true, data: savedVideo.id })
}