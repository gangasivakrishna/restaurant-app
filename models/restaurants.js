const mongoose = require('mongoose');
const restarurantSchema = new mongoose.Schema({
    name: String,
    seller: String,
    restaurantId: String,
    address:String

})
module.exports = mongoose.model('restarurant',restarurantSchema);

