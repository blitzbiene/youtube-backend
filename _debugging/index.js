const mongoose = require("mongoose");
const userCollection = require("./models-debugging/user");

const MONGO_URI = `mongodb+srv://tornado:1252712525@cluster0.clwue.mongodb.net/youtube?retryWrites=true&w=majority`;
const CONNECTION_PARAMS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}


const main = async ()=>{
    await mongoose.connect(MONGO_URI,CONNECTION_PARAMS);
    console.log("connected to db");
    userCollection.getUsers();


}










main();