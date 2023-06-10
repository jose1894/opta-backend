const { Router, response } = require( 'express' )
const { check } = require('express-validator')
const validator = require('validator');

const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require( '../middlewares')

const { 
    proyectoPost,
    proyectosGet,
    proyectoGet,
    proyectoPut,
    proyectoDelete,
    proyectoRestore,
    allProyectosGet,
    proyectosGetDeleted
} = require('../controllers/proyectos')

const { existeProyectoPorId } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', proyectosGet) 

router.get( '/allProyectos', allProyectosGet)

router.get( '/proyectosDeleted', proyectosGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 10 caracteres' ).isLength({ min: 2, max:10 }),
    validarCampos
], proyectoPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeProyectoPorId),
    validarCampos,
], proyectoGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'id' ).custom( existeProyectoPorId ),
    validarCampos
], proyectoPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeProyectoPorId ),
    validarCampos 
], proyectoDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeProyectoPorId ),
    validarCampos 
], proyectoRestore)



module.exports = router