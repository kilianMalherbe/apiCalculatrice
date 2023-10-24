const express = require('express');
const calc = require('./calc.js')
const asyncCalc = require('./async.js')
const app = express();

app.get('/', function(req, res) {
    res.send('API calculatrice');
});

app.get('/asynctest/', function(req, res) {
    asyncCalc.loadDistantFile('./todos.json')
    .then(function(content) {
        console.log('Fichier chargé !');
        res.json(content);
    })
    .catch(function(error) {
        console.log('Erreur : ', error);
    })
});

app.get('/add/:input1/:input2', function(req, res) {
    res.send(calc.sum(req.params.input1, req.params.input2));
});

app.get('/minus/:input1/:input2', function(req, res) {
    res.send(calc.sub(req.params.input1, req.params.input2));
});

app.get('/multiply/:input1/:input2', function(req, res) {
    res.send(calc.mult(req.params.input1, req.params.input2));
});

app.get('/divide/:input1/:input2', function(req, res) {
    res.send(calc.div(req.params.input1, req.params.input2));
});

app.get('/modulo/:input1/:input2', function(req, res) {
    res.send(calc.mod(req.params.input1, req.params.input2));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
});