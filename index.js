const mongoose = require("mongoose");
const User = require("./models/users");
const Video = require("./models/videos");
const Comment = require("./models/comments");

/*const main = (db)=>{
    console.log();
}


const start = async ()=>{

    const db = await mongoose.connect('mongodb://127.0.0.1:27017/youtube',
        {useNewUrlParser:true});
    main(db);
}
start();*/

const url = `mongodb+srv://tornado:1252712525@cluster0.clwue.mongodb.net/youtube?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const addcomment = async ()=>{
    const comment = new Comment({
        text:"first comment",

    });
    await comment.save();
    console.log("written");
}
const adduser = async()=>{
    const user = new User({
        firstname:"harshit",
        lastname:"gupta",
        email: "{type:String,required:true}",
        username: "{type:String,required:true}",
        password: "{type:String,required:true}",
    });
    await user.save();
    console.log("written");
}
const addVideo = async ()=>{
    const video = new Video({
    title:"{type:String,required:true}",
    description:"{type:String,required:true}",
    url:"{type:String,required:true}",
    thumbnail:"{type:String,required:true}",
    uploadedBy:"6084541d7629e2508261834c",

    });
    await video.save();
    console.log("video added");
}
const getVideo = async ()=>{
    const videos = await Video.find({}).populate('uploadedBy');
    console.log(videos);
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
        addcomment();
        adduser();
        addVideo();
        getVideo();
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })