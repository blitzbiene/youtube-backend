const User = require('../../models/User');

const getUsers = async ()=>{
    const users = await User.find({}).populate('subscribed');
    console.log(users.length);
    if(users[1].subscribed[0])console.log(users[1].subscribed);
}
module.exports = {
    getUsers
}