const { Router } = require('express');
const exerciseControllers = require('../controllers/exercises.controller');const routerExercises = Router();

routerExercises.get(`/`,exerciseControllers.userGet);

module.exports = routerExercises;