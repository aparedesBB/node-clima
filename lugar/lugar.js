const axios = require('axios');

const getLugarLL = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '0a60f32698mshe81151d2a765d39p130617jsn2c684f14375b' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para el lugar ${direccion}`);
    }

    const data = resp.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        lugar,
        lat,
        lng
    };
};

module.exports = {
    getLugarLL
}