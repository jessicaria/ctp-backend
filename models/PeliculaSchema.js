const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquemita = {
    type: String,
    required: true
};

const PeliculaSchema = new Schema({
    nombre: esquemita,
    genero: {
        type: String,
        required: true
    },
    actores: {
        type: [String],
        required: true
    },
});

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);
module.exports = Pelicula;