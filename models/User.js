const mongoose = require("mongoose");
const defaultAvatar = require("../utils/constants").defaultAvatar;
const defaultCoverImage = require("../utils/constants").defaultCoverImage;

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    channelDescription: { type: String },
    avatar: { type: String, default: defaultAvatar },
    coverImage: { type: String, default: defaultCoverImage },
    isAdmin: { type: Boolean, default: false },
    subscribers: { type: Number, defalut: 0 },
    videos: [{ type: mongoose.Types.ObjectId, ref: 'Videos' }],
    subscribed: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
    likedVideos: [{ type: mongoose.Types.ObjectId, ref: "Videos" }],
    dislikedVideos: [{ type: mongoose.Types.ObjectId, ref: "Videos" }],
    viewedVideos: [{ type: mongoose.Types.ObjectId, ref: "Videos" }]
});

module.exports = mongoose.model("Users", userSchema)