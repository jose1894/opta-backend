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
    menuGet,
    menuGetDeleted,
    menuItemGet,
    allMenuGet,
    itemMenuPost,
    itemMenuPut,
    itemMenuDelete,
    itemMenuRestore
} = require('../controllers/menu')

const { existeMenuPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', menuGet) 

router.get( '/allMenu', allMenuGet)

router.get( '/menuDeleted', menuGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    validarCampos
], itemMenuPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeMenuPorId ),
    validarCampos,
],menuItemGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeMenuPorId ),
    validarCampos
], itemMenuPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMenuPorId ),
    validarCampos 
], itemMenuDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMenuPorId ),
    validarCampos 
], itemMenuRestore)
module.exports = router