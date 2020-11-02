const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

// habilitar express.json
app.use( express.json({ extended: true }))

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));

//arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando el puerto ${PORT}`);
});