var express = require('express');
var proxy = require('http-proxy-middleware');

var context = '/news';
var options = {
	target: 'http://www.target.com',
	changeOrigin: true
};

var apiProxy =  proxy(context, options);
var app = express();
app.use(apiProxy);
app.listen(3000);
app.get('/', function(req,res){
	res.sendFile(__dirname+'/src/index.html');
});