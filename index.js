var express = require('express'),

    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:root@ds121665.mlab.com:21665/index", {
    useMongoClient: true
});

app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS")
        res.status(200).send({
            url: req.originalUrl
        });
    else
        next();
}
app.use(allowCrossDomain);


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) { // sending unknown request
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});

app.listen(port); // setting port

console.log('todo list RESTful API server started on: ' + port);