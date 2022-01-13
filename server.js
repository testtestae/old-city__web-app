const https = require('https');
const fs = require('fs')
const express = require('express');

const app = express();
const http = require('http');

const oldCity = require('./routers/oldCity/oldCity')

const options = {
    cert: fs.readFileSync('../Certbot/archive/an-e.ru/fullchain1.pem'),
    key: fs.readFileSync('../Certbot/archive/an-e.ru/privkey1.pem')
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.use('/old_city', oldCity);
app.use(express.static('static'));


http.createServer(app).listen(80)
https.createServer(options, app).listen(443);
