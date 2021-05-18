const { response, request } = require('express');
const exerciseServices = require('../services/exercises.services');

const listenOfExercises =  (req = request, res = response) => {
	const listOfExercises =   exerciseServices.getAllExercises();
	res.json(listOfExercises);
};
module.exports = {
	listenOfExercises,
};
