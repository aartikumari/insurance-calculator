var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var Insurance = require('./Insurance');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();
 
// all other code will go here 
 
app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);

mongoose.connect('mongodb://localhost:27017/Insurances');

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/Insurances').post(function (req, res) {
 
     var i = new Insurance();
    i.car_price = req.body.car_price;
    i.customer_age= req.body.customer_age;
    i.car_status = req.body.car_status;
    Insurance_cal();
    i.Insurance_money=Insurance_cal()
    //i.Insurance_money=i.car_price*0.10;
    function Insurance_cal(){
        if(i.car_price<100 || i.customer_age >60) 
        {
            console.log("Insurance IS NOT Available");
        }
        else
        {
            i.Insurance_money =i.car_price*0.10;
        }
        return i.Insurance_money;
    }


  
    i.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Post Successfully' })
    })
});

router.route('/Insurances').get(function (req, res) {
    Insurance.find(function (err, Insurances) {
        if (err) {
            res.send(err);
        }
        res.send(Insurances);
    });
});

router.route('/Insurances/:Insurances_id').get(function (req, res) {
 
    Insurance.findById(req.params.Insurances_id, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});
router.route('/Insurances/:Insurances_id').delete(function (req, res) {
 
    Insurance.remove({ _id: req.params.Insurances_id }, function (err, data) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    })
 
});