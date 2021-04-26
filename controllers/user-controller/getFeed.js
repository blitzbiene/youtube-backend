const User = require("../../models/User")
const Video = require("../../models/Video")

exports.getFeed = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
            .populate({
                path: 'subscribed',
                select: 'videos -_id',
                populate: {
                    path: 'videos'
                }
            })

        const videos = []
        const videoId = []
        const allVideos = await Video.find()

        user.subscribed.map((userVideo) => {
            videos.push(...userVideo.videos)
            userVideo.videos.map(v => {
                videoId.push(v.id)
            })
        })

        // if (videos.length < 20) {
        //     allVideos.map(video => {
        //         if (!videoId.includes(video.id)) {
        //             videos.push(video)
        //         }
        //     })
        // }

        return res.json({ success: true, data: videos })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}