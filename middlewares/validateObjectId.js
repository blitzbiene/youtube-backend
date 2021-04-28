const { isValidObjectId } = require("mongoose")


module.exports = (req, res, next) => {
    if (isValidObjectId(req.params.id)) {
        next()
    }
    else {
        throw new Error("Invalid Id")
    }
}