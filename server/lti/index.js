'use strict';

var express = require('express');

var controller = require('./lti');
var router = express.Router();

router.post('/', controller.lti);

module.exports = router;
