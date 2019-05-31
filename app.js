const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/* lugar.getLugarLL(argv.direccion).then(
    console.log
    //clima.getClima(lat, lng).then(console.log).catch(console.log)
).catch(console.log); */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLL(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${coords.lugar} es de ${temp} grados celsius.`;
    } catch (error) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);