const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

// Modelos
const Pelicula = require('../models/PeliculaSchema');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Probar que funciona...
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

// POST - CREATE Pelicula
app.post('/api/v1/pelicula', (req, res) => {
  const { nombre, genero, actores } = req.body;
  let mensaje = {};

  if (actores === undefined) mensaje.actores = 'debes mandar un arreglo de actores!';

  Pelicula.create({nombre, genero, actores}, (err, objetoBD) => {
    !err && actores !== undefined
    ? res.status(201).send(objetoBD)
    : res.status(400).send({ mensaje, database: err });
  });
});

// GET ALL - READ Película
app.get('/api/v1/pelicula', (req, res) => {
  Pelicula.find()
          .then(peliculas => res.status(200).send(peliculas))
          .catch(err => res.status(400).send(err));
});

// GET ONE - READ Película
app.get('/api/v1/pelicula/:id', (req, res) => {
  const peliculaID = req.params.id;
  Pelicula.findOne({_id:peliculaID})
          .then(pelicula => res.status(200).send(pelicula))
          .catch(err => res.status(400).send(err));
});

// PATCH - UPDATE Película 
app.patch('/api/v1/pelicula/:id', (req, res) => {
  const peliculaID = req.params.id;
  Pelicula.findByIdAndUpdate(
          { _id: peliculaID },
          { $set: req.body })
          .exec()
          .then(pelicula => res.status(200).send(pelicula))
          .catch(err => res.status(400).send(err));
});

// UPDATE Película
app.patch('/api/v1/pelicula/:id/', (req, res)=>{
  const {id} = req.params;

  Pelicula
      .findByIdAndUpdate( id, { $set: req.body }, {new: true})
      .exec()
      .then( peliActualizada => res.status(200).send(peliActualizada))
      .catch( error => res.status(400).send(error));
});


// DELETE - Película
app.delete('/api/v1/pelicula/:id', (req, res) => {
  const peliculaID = req.params.id;
  Pelicula.findOneAndDelete({_id:peliculaID})
          .then(pelicula => res.status(204).send(pelicula))
          .catch(err => res.status(400).send(err));
});

module.exports = { PORT, app }