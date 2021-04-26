const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,ref:'Users',required:true},
    text:{type:String,required:true}
    //videoId:{type:mongoose.Type.ObjectId,ref:'Videos'}
});
module.exports = mongoose.model("Comments",commentSchema);
