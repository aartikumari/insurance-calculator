
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InsuranceSchema = new Schema({
    car_price: Number,
    customer_age: Number,
    car_status: String,
    Insurance_money: String

     });

module2.exports = mongoose2.model('Insurance', InsuranceSchema);

module.exports = mongoose.model('Insurance', InsuranceSchema);