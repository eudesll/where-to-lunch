var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send('Today we will lunch at Rockfella');
});

module.exports = router;
