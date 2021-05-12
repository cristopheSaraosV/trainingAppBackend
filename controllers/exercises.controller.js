const { response, request } = require('express');
const exerciseServices = require('../services/exercises.services')
const userGet = (req = request, res = response) => {
    const listOfExercises = exerciseServices.userGet();
	res.json(listOfExercises);
};
module.exports = {
	userGet    
};
