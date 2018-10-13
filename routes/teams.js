const express = require ('express');
const Boom = require('boom');
const TeamService = require('../services/team-services')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
