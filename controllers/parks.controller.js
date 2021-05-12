const { response, request } = require('express');
const parksServices = require('../services/parks.services');

const listenOfParks = (req = request, res = response) => {
	const listOfParks = parksServices.getAllParks();
	res.json(listOfParks);
};
module.exports = {
	listenOfParks,
};
