const mongoose = require("mongoose");


const videoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },
    comments: [
        {
            user: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
            text: { type: String, required: true }
        }
    ],
    // comments: [{ type: mongoose.Types.ObjectId, ref: "Comments" }],
    uploadedBy: { type: mongoose.Types.ObjectId, ref: "Users" },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Videos", videoSchema);