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
    sucursalPost, 
    sucursalesGet, 
    sucursalGet, 
    sucursalPut, 
    sucursalDelete,
    sucursalRestore,
    allSucursalesGet,
    sucursalesGetDelete
} = require('../controllers/sucursales')

const { existeSucursalPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', sucursalesGet) 

router.get( '/sucursalesDelete', sucursalesGetDelete)

router.get( '/allSucursales', allSucursalesGet) 


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
], sucursalPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeSucursalPorId ),
    validarCampos,
], sucursalGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'siglas', 'La longitud debe ser de 5 caracteres' ).isLength({ min: 1, max:5 }),
    check( 'siglas', 'las siglas son obligatorias' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check('id').custom( existeSucursalPorId ),
    validarCampos
], sucursalPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeSucursalPorId ),
    validarCampos 
], sucursalDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeSucursalPorId ),
    validarCampos 
], sucursalRestore)

module.exports = router