const { Router } = require('express');
const parksControllers = require('../controllers/parks.controller');

const routerParks = Router();

routerParks.get('/',parksControllers.listenOfParks)

module.exports = routerParks;
