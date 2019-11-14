var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send({
    "response_type": "in_channel",
    "type": "mrkdwn",
    "text": "<!here> Today we will lunch at *Rockafella*"
  });
});

module.exports = router;
