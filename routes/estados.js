const { Router } = require( 'express' )
const { check } = require('express-validator')
const validator = require('validator');

const {
    validarCampos,
    validarJWT
} = require( '../middlewares')

const { 
    estadosPost, 
    estadosGet, 
    estadoGet, 
    estadoPut, 
    estadoDelete,
    estadoRestore
} = require('../controllers/estados')

const { existeEstadoPorId, existeEmail } = require('../helpers/db-validators')
const { Estado } = require('../models')

const router =  Router()


//Obtener todos los estados - publico
router.get( '/', estadosGet) 

//Crear estado - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], estadosPost)

// Obtener un estado - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeEstadoPorId ),
    validarCampos,
],estadoGet)


//Actualizar estado - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeEstadoPorId ),
    validarCampos
], estadoPut)

//Borrar una estado - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeEstadoPorId ),
    validarCampos 
], estadoDelete)

//Borrar una estado - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeEstadoPorId ),
    validarCampos 
], estadoRestore)

module.exports = router