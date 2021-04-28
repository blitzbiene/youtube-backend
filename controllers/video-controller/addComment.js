const Video = require("../../models/Video");
const { validateComments } = require("../../utils/joiValidate")

module.exports = async (req, res, next) => {
    const { error } = validateComments(req.body);

    if (error) {
        throw new Error(error.details[0].message)
    }

    const video = await Video.findById(req.params.id)
    if (!video) {
        throw new Error('Invalid Video Id')
    }

    video.comments.push({ user: req.user.id, ...req.body })

    await video.save()

    return res.json({ success: true, data: {} })
}