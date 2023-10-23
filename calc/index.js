var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('API calculatrice');
});

app.get('/add/:input1/:input2', function(req, res) {
    let input1 = parseInt(req.params.input1);
    let input2 = parseInt(req.params.input2);

    let result = input1 + input2;

    res.send(result.toString());
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
});