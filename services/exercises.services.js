const jsonExercises = require('../public/json/exercises.json');

const getAllExercises = () => {
	return jsonExercises;
};

module.exports = {
	getAllExercises,
};
