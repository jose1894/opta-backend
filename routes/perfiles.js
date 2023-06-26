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
    perfilPost,
    perfilesGet,
    perfilGet,
    perfilPut,
    perfilDelete,
    perfilRestore,
    allPerfilesGet,
    perfilesGetDeleted
} = require('../controllers/perfiles')

const { existePerfilPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', perfilesGet) 

router.get( '/allPerfiles', allPerfilesGet)

router.get( '/perfilesDeleted', perfilesGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    validarCampos
], perfilPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existePerfilPorId ),
    validarCampos,
], perfilGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existePerfilPorId ),
    validarCampos
], perfilPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePerfilPorId ),
    validarCampos 
], perfilDelete)

//Restaurar una perfil - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePerfilPorId ),
    validarCampos 
], perfilRestore)



module.exports = router