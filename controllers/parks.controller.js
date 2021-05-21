// const parksServices = require('../services/parks.services');
// const weathersServices = require('../services/weather.services');
const { response, request } = require('express');
const Park = require('../models/parks');



// const listenOfParks = async (req = request, res = response) => {
// 	const listOfParks = parksServices.getAllParks();
// 	await listOfParks.map(async (park) => {
// 		const resultPetition = await weathersServices.getWeatherByCity( park.city );
// 		park.weather = resultPetition.weather[0].description;
// 		park.temp = parseInt(resultPetition.main.temp);
// 	});

// 	res.json(listOfParks);
// };

const savePark = async (req = request, res = request) => {

	const {name, city, region, urlDirection, ...resto} = req.body
	const park = new Park({name, city, region, urlDirection});
	await park.save()
	res.json(park);
}

const getAllParks = async (req = request, res = response) => {
	const park = await Park.find(); 
	res.json(park);
};

const updatePark = async (req = request, res = response ) => {
	const { id } = req.params;
	const { name, city, region, urlDirection, ...resto } = req.body;
	const park = await Park.findByIdAndUpdate( id, {name, city, region, urlDirection });
	res.json(park)
	
}

const deletePark = async ( req = request, res = response) => {
	
	const { id } = req.params;
	const park = await Park.findByIdAndDelete(id);

	res.json({
		status:true,
		"msg":"Eliminated park",
		park 
	})
}

module.exports = {
	getAllParks,
	savePark,
	updatePark,
	deletePark
};
