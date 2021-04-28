const User = require("../../models/User")

exports.toggleSubscribe = async (req, res, next) => {
    if (req.user.id === req.params.id) {
        throw new Error("You cannot subscribe to your own channel")
    }

    const user = await User.findById(req.params.id)

    if (!user) {
        throw new Error("Invalid Channel Id")
    }

    // user = await User.findById(req.user.id)

    if (req.user.subscribed.includes(req.params.id)) {
        req.user.subscribed.remove(req.params.id)
        user.subscribers -= 1
    }
    else {
        req.user.subscribed.push(req.params.id)
        user.subscribers += 1
    }

    await user.save()
    await req.user.save()

    return res.json({ success: true, data: {} })

}
