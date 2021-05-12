const jsonPark = require('../public/json/parks.json');

const getAllParks = () => {
	return jsonPark;
};

module.exports = {
	getAllParks,
};
