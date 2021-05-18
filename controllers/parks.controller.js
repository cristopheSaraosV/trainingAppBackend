const { response, request } = require('express');
const parksServices = require('../services/parks.services');
const weathersServices = require('../services/weather.services');

const listenOfParks = async (req = request, res = response) => {
	const listOfParks = parksServices.getAllParks();
	await listOfParks.map(async (park) => {
		const resultPetition = await weathersServices.getWeatherByCity( park.city );
		park.weather = resultPetition.weather[0].description;
		park.temp = parseInt(resultPetition.main.temp);
	});

	res.json(listOfParks);
};
module.exports = {
	listenOfParks,
};
