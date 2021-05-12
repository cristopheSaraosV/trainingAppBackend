const jsonExercises = require('../public/json/exercises.json');

const userGet = () => {
	return jsonExercises;
};

module.exports = {
	userGet,
};
