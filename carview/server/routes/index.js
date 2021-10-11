var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../config/config');
const language = require('../public/js/language')
var qs = require('qs');
const client = require('../services/redis')


module.exports = router;
