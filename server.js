const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/client'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + 'dist/client/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log('Console of Client "EBE TEAM" Listening');