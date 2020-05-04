// JavaScript source code
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/db_name');  
// App configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS requests handling
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
    next();
});
// log all requests to the console
app.use(morgan('dev'));

// routes for API
//basic route for the homepage
app.get('/', function (req, res) {
    res.send('Welcome to the homepage');
});

//instance of express router
var apiRouter = express.Router();
// test route to make sure everything is working
apiRouter.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api' });

});
app.use('/api', apiRouter);

app.listen(port);
console.log('Magic happens on port' + port);




















