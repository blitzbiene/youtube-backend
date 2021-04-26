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