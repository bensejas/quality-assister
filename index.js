var express = require('express');
var serveStatic = require('serve-static');
var request = require('request');
 
var app = express();
 
var router = express.Router();

router.get('/example', function(req, res) {
	res.json({example:'example'});
};

app.use('/api', router);

app.use(serveStatic('app', {'index': ['index.html']}));
app.listen(3001);