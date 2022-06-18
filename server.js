var http = require('http');
var express = require('express');
var app = express();
var app = require('./config/express')();

const url = 'mongodb://dswa5:dswa5@cluster0-shard-00-00.ig8hl.mongodb.net:27017,cluster0-shard-00-01.ig8hl.mongodb.net:27017,cluster0-shard-00-02.ig8hl.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-y7duym-shard-0&authSource=admin&retryWrites=true&w=majority';

const localUrl = 'mongodb://localhost/contatooh'
require('./config/database.js')(url);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});