const Video = require('../../models/Video')

module.exports = async (req, res, next) => {
    const video = await Video.findById(req.params.id, '-__v')
        .populate('comments.user', 'id username avatar')
        .populate('uploadedBy', 'id username avatar')

    if (!video) {
        throw new Error('Invalid Id')
    }

    res.json({ success: true, data: video })
}