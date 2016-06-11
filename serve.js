var express = require('express');
var openurl = require("openurl");

var app = express()
app.use(express.static('src'));
app.listen(3000);

var defaultUrl = 'http://localhost:3000';
openurl.open(defaultUrl)
console.log('Opened "' + defaultUrl + '"');