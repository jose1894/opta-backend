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
    accionPerfilPost,
    accionesPerfilesGet,
    accionPerfilGet,
    accionPerfilPut,
    accionPerfilDelete,
    accionPerfilRestore,
    allAccionesPerfilesGet,
    accionesPerfilesGetDeleted
} = require('../controllers/accionesPerfiles')

const { existeAccionPerfilPorId, existeEmail, existeAccionPerfilPorCodigo } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', accionesPerfilesGet) 

router.get( '/allAccionesPerfiles', allAccionesPerfilesGet)

router.get( '/accionesPerfilesDeleted', accionesPerfilesGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'codigo').custom(existeAccionPerfilPorCodigo),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    validarCampos
], accionPerfilPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeAccionPerfilPorId ),
    validarCampos,
],accionPerfilGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeAccionPerfilPorId ),
    validarCampos
], accionPerfilPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeAccionPerfilPorId ),
    validarCampos 
], accionPerfilDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeAccionPerfilPorId ),
    validarCampos 
], accionPerfilRestore)



module.exports = router