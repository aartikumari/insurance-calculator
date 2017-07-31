
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InsuranceSchema = new Schema({
    car_price: Number,
    customer_age: Number,
    car_status: String,
    Insurance_money: String

     });


module.exports = mongoose.model('Insurance', InsuranceSchema);


