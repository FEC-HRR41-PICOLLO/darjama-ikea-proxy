const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3005;
const url = require('url');

app.use(cors({
  credentials: true,
}));
app.use(express.static('public'));
app.use(bodyParser.json());

// app.get('/api-reviews', function(req, res) {
//   res.redirect(url.format({
//     hostname: 'localhost',
//     port: 3003,
//     query: req.query,
//     json: {msg: 'This is CORS-enabled for a Single Route'}
//     })
//   )
// });

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}, ${new Date()}`);
});

module.exports.app = app;