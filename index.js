const express = require('express')
const mongoose = require("mongoose");
const User = require("./models/User");
const Video = require("./models/Video");
const Comment = require("./models/Comment");
const auth = require('./routes/auth');
const user = require('./routes/user');
const video = require('./routes/video');

const app = express()
const PORT = process.env.PORT || 3000;

const url = `mongodb+srv://tornado:1252712525@cluster0.clwue.mongodb.net/youtube?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}


app.use(express.json())
app.use('/auth', auth)
app.use('/user', user)
app.use('/video', video)

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        })
    })
    .catch((err) => console.error(`Error connecting to the database. \n${err}`))


