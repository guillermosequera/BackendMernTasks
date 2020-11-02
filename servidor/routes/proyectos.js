const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectocontroller');

//crea proyectos
// api/projects
router.post('/', 
    proyectoController.crearProyeecto
)

module.exports = router;