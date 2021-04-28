const Joi = require("joi");

exports.validateUser = (req) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(4).max(255).required(),
        firstname: Joi.string().min(4).max(255).required(),
        lastname: Joi.string().min(4).max(255).required()
    });

    return schema.validate(req)
}

exports.validateVideo = (req) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        description: Joi.string().min(4).required(),
        thumbnail: Joi.string().min(4).max(255).required(),
        url: Joi.string().min(4).max(255).required()
    })

    return schema.validate(req)
}

exports.validateComments = (req) => {
    const schema = Joi.object({
        text: Joi.string().min(1).max(512).required()
    })

    return schema.validate(req)
}