const User = require("../../models/User")
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
        -
            await user.save()

        return res.json({ success: true, data: {} })
    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message })
    }

}
