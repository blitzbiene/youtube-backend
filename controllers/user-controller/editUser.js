const Joi = require("joi");
const User = require('../../models/User')

exports.editUser = async (req, res, next) => {
    const { error } = validate(req.body)
    if (error) {
        console.log(error.details[0]);
        throw new Error(error.details[0].message)
    }

    const { avatar, coverImage, firstname, lastname, channelDescription } = req.body

    const user = await User.findByIdAndUpdate(req.user.id, req.body)

    res.json({ success: true, data: {} })
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