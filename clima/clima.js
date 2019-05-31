const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06f1d42dee4e3348975e4a039b296643&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}