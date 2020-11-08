const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//crea proyectos
//api/projects
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

//obtener todos los proyectos
router.get('/', 
    auth,
    proyectoController.obtenerProyectos
)

//actualizar proyecto via ID
router.put('/id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

module.exports = router;