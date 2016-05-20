'use strict';

var express = require('express');

var controller = require('./assessment');
var router = express.Router();

router.post('/', controller.assess);

module.exports = router;
