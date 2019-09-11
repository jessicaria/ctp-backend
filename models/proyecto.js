const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Carrera = {
    NombreCarrera : {
        type: String,
        required : true
    },
    Materias: [Materia]
}
const Materia = {
    NombreMateria : {
        type: String,
        required : true
    },
    Profesores : [Profesor]
}

const Profesor = {
    NombreProfesor: {
        type: String,
        required : true
    },
    Calificaciones: [Number]
}
const CriticaSchema = new Schema({
    carr : Carrera,
    materias : [Materia]
})
const Critica = mongoose.model('Critica', CriticaSchema);
module.exports = Critica;

