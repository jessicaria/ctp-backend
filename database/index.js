const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }, 
    () => console.log('Conexión exitosa con BD 🐢'));