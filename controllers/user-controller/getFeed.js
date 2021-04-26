
exports.getFeed = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
            .populate('User', 'videos',)

        const videos = []
        const allVideos = await User.find('id videos')

        user.subscribed.map((videolist) => {
            videos.push(...videolist)
        })
    }
    catch (e) {

    }
}