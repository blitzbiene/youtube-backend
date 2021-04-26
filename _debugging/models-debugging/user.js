const User = require('../../models/User');

const getUsers = async ()=>{
    const users = await User.find({}).populate('subscribed');
    console.log(users.length);
    
}
module.exports = {
    getUsers
}