const { Router } = require( 'express' )
const { check } = require('express-validator')
const validator = require('validator');

const {
    validarCampos,
    validarJWT
} = require( '../middlewares')

const { 
    ciudadesPost, 
    ciudadesGet, 
    ciudadGet, 
    ciudadPut, 
    ciudadDelete,
    ciudadRestore,
    ciudadesByEstadosGet,
    ciudadGetDelete
} = require('../controllers/ciudad')

const { existeCiudadPorId, existeEmail } = require('../helpers/db-validators')
const { Ciudad } = require('../models')

const router =  Router()


//Obtener todos los estados - publico
router.get( '/', ciudadesGet) 
router.get( '/ciudadesDelete', ciudadGetDelete) 

//Crear estado - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'state', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], ciudadesPost)

// Obtener un estado - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeCiudadPorId ),
    validarCampos,
],ciudadGet)


//Actualizar estado - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'state', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeCiudadPorId ),
    validarCampos
], ciudadPut)

//Borrar una estado - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeCiudadPorId ),
    validarCampos 
], ciudadDelete)

//Borrar una estado - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeCiudadPorId ),
    validarCampos 
], ciudadRestore)

router.get( '/ciudadesByEstados/:id', ciudadesByEstadosGet) 

module.exports = router