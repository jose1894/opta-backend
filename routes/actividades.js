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
    actividadPost,
    actividadesGet,
    actividadGet,
    actividadPut,
    actividadDelete,
    actividadRestore,
    allActividadesGet,
    actividadesGetDeleted
} = require('../controllers/actividades')

const { existeActividadPorId } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', actividadesGet) 

router.get( '/allActividades', allActividadesGet)

router.get( '/actividadesDeleted', actividadesGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'siglas', 'La siglas son obligatorias.' ).not().isEmpty(),
    check( 'siglas', 'La longitud debe ser de 4 caracteres' ).isLength({ min: 1, max:4 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], actividadPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeActividadPorId ),
    validarCampos,
],actividadGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'siglas', 'La siglas son obligatorias.' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeActividadPorId ),
    validarCampos
], actividadPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeActividadPorId ),
    validarCampos 
], actividadDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeActividadPorId ),
    validarCampos 
], actividadRestore)



module.exports = router