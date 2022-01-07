const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    sessionId:String,
    username:String,
    token:String
})

module.exports = mongoose.model('sessions',sessionSchema);