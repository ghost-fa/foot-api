const express = require ('express');
const Boom = require('boom');
const TeamService = require('../services/team-services')

var router = express.Router();

/* GET list all teams */
router.get('/', async(req, res) =>{
  const teams = await TeamService.retrieve();
  res.join(teams);
});


// Get a single team by id
router.get('/:id', async(req,res,next) =>{
  const {id} = req.params;
  try {
    const team = await TeamService.retrieve(id);
    res.join(team)
  } catch (err) {
    next(Boom.notFound(`No such team with id: ${id}`));
  }
});

module.exports = router;
