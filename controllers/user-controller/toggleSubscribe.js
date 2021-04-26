<<<<<<< HEAD:controllers/user.js
const Joi = require("joi")
const User = require("../models/User")
const Video = require("../models/Video")

=======
const User = require("../../models/User")
>>>>>>> 367b253c8bd3941b6bbe980c89fce4c505008d3d:controllers/user-controller/toggleSubscribe.js
exports.toggleSubscribe = async (req, res, next) => {
    try {
        if (req.user.id === req.params.id) {
            throw new Error("You cannot subscribe to your own channel")
        }


        let user = await User.findById(req.params.id)

        if (!user) {
            throw new Error("Invalid Channel Id")
        }

        user = await User.findById(req.user.id)

        if (user.subscribed.includes(req.params.id)) {
            user.subscribed.remove(req.params.id)
        }
        else {
            user.subscribed.push(req.params.id)
        }

        await user.save()

        return res.json({ success: true, data: {} })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }

<<<<<<< HEAD:controllers/user.js
}
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
exports.editUser = async (req, res, next) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            console.log(error.details[0]);
            throw new Error(error.details[0].message)
        }

        const { avatar, coverImage, firstname, lastname, channelDescription } = req.body

        const user = await User.findByIdAndUpdate(req.user.id, req.body)

        res.json({ success: true, data: {} })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}
exports.getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, '-__v')

        if (!user) {
            throw new Error("Invalid User Id")
        }
        console.log(user);
        return res.json({ success: true, data: user })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }
}
exports.recommendChannels = (req, res, next) => {
    res.send("hello");
}
exports.getLikedVideos = (req, res, next) => {

}
exports.getHistory = (req, res, next) => {

}

function validate(req) {
    const schema = Joi.object({
        firstname: Joi.string().min(4).max(255).required(),
        lastname: Joi.string().min(4).max(255).required(),
        avatar: Joi.string().min(4).max(255),
        coverImage: Joi.string().min(4).max(255),
        channelDescription: Joi.string().min(5).max(500)
    });
    return schema.validate(req)
}
=======
}
>>>>>>> 367b253c8bd3941b6bbe980c89fce4c505008d3d:controllers/user-controller/toggleSubscribe.js
