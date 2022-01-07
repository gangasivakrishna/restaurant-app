const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    role:String,
    email:String,
    address:String,
    enable:Boolean
})
module.exports = mongoose.model('users', userSchema);