const express = require ('express');
const Boom = require('boom');
const TeamService = require('../services/team-services')

var router = express.Router();


// Add a new team to the db
router.post('/', async(req, res, next) => {
  try {
    const team = await TeamService.create(req.body);
    res.json(team);
  } catch(err) {
    if(err.name === 'ValidationError'){
      next(Boom.badRequest(err));
    }
    next(Boom.badImplementation(err));
  }
});


/* GET list all teams */
router.get('/', async(req, res) =>{
  const teams = await TeamService.retrieve();
  res.json(teams);
});


// Get a single team by id
router.get('/:id', async(req,res,next) =>{
  const {id} = req.params;
  try {
    const team = await TeamService.retrieve(id);
    res.json(team)
  } catch (err) {
    next(Boom.notFound(`No such team with id: ${id}`));
  }
});


// Update a team
router.put('/:id', async(req, res, next) =>{
  const {id} = req.params;
  try {
    const update = await TeamService.update(id, req.body);
    res.json(update);
  } catch (err) {
    if(err.name === 'ValidationError'){
      next(Boom.badRequest(err));
    }else {
      next(Boom.notFound(`No such team with id: ${id}`));
    }
  }
});



// Delete a team
router.delete('/:id', async(req, res, next) =>{
  const {id} = req.params;
  try {
    const delet = await TeamService.delete(id);
  } catch (err) {
    next(Boom.notFound(`No such team with id: ${id}`));
  }
});

module.exports = router;
