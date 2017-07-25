var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InsuranceSchema = new Schema({
  
    customer_age: Number
   

     });
module.exports = mongoose.model('calculate_insurance', InsuranceSchema);