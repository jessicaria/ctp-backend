/*
    información básica de las películas como, nombre, género, actores y descripción. Tu eres el encargado de diseñar la base de datos para esta app.
*/

require('dotenv').config();
require('./database');
const { PORT, app } = require('./server');

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));