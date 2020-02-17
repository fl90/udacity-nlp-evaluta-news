const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// add post route
app.post('/sentiment', sentiment);

function sentiment(req, res){
    
    console.log("Hier wirds aufgerufen");

    console.log(req.body);

    textapi.sentiment({
        text: req.body.text,
        url: 'https://www.google.de',
        mode: 'tweet'
        }, function(error, response){
        if(error === null){
            console.log(response);
            res.send(response);
        }else{
            console.log(error);
            res.send(error);
        }
    })

    
}