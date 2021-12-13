var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/docs', function(req, res, next) {
  userController.getJsonData(req,res,next);
});

module.exports = router;
