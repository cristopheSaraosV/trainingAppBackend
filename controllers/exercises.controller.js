const { response, request } = require('express');
const Exercise = require('../models/exercises');





const getAllExercises = async (req = request, res = response) => {
	const exercises = await Exercise.find();
	res.json(exercises);
};

const saveExercise = async  (req = request, res = response) => {	

	const {name, description} = req.body
	const exercise = new Exercise({name,description});
	await exercise.save()
	res.json(exercise);
};

const updateExercise = async  (req = request, res = response) => {	

	const { id } = req.params;
	const { name, description, ...resto } = req.body;
	const exercise = await Exercise.findByIdAndUpdate( id, { name, description } );

	res.json(exercise);
};




module.exports = {
	
	saveExercise,
	updateExercise,
	getAllExercises
};
