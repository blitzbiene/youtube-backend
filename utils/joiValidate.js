const Joi = require("joi");

exports.validate = (req)=> {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(255).required(),
        username: Joi.string().min(4).max(255).required(),
        firstname: Joi.string().min(4).max(255).required(),
        lastname: Joi.string().min(4).max(255).required()
    });

    return schema.validate(req)
}