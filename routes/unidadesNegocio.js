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
    unidadNegocioPost, 
    unidadesNegocioGet, 
    unidadNegocioGet, 
    unidadNegocioPut, 
    unidadNegocioDelete,
    unidadNegocioRestore,
    allUnidadesNegocioGet,
    unidadesNegocioGetDelete
} = require('../controllers/unidadesNegocio')

const { existeUnidadNegociolPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', unidadesNegocioGet) 
router.get( '/unidadesNegocioDelete', unidadesNegocioGetDelete)

router.get( '/allUnidadesNegocio', allUnidadesNegocioGet) 


//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'siglas', 'La longitud debe ser de 5 caracteres' ).isLength({ min: 1, max:5 }),
    check( 'siglas', 'las siglas son obligatorias' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos,
], unidadNegocioPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUnidadNegociolPorId ),
    validarCampos,
], unidadNegocioGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'siglas', 'La longitud debe ser de 5 caracteres' ).isLength({ min: 1, max:5 }),
    check( 'siglas', 'las siglas son obligatorias' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check('id').custom( existeUnidadNegociolPorId ),
    validarCampos
], unidadNegocioPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUnidadNegociolPorId ),
    validarCampos 
], unidadNegocioDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUnidadNegociolPorId ),
    validarCampos 
], unidadNegocioRestore)

module.exports = router