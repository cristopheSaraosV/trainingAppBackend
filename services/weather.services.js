const axios = require('axios');


const getWeatherByCity = async (city = 'santiago') => {
    try {
        const resultAxios = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY_API_WEATHER}&units=metric`);
        return resultAxios.data;
        
    } catch (error) {
        console.clear();
        console.log(error.message);
    }
}

module.exports = {
	getWeatherByCity,
};
