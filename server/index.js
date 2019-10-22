const express = require('express');
let app = express();
const path = require('path');
const port = 3005;

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}, ${new Date()}`);
});

module.exports.app = app;