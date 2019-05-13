const express = require('express');
const app = express();
let message = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    response.sendFile('html/index.html', { root : __dirname});
});

app.post('/', function (request, response) {
    response.send(message);
});

app.post('/send', function (request, response) {
    message = request.body;
    response.send(message);
});

app.listen(3000);