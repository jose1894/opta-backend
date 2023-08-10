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
    riesgosGet,
    riesgoGet,
    riesgoPost,
    riesgoPut,
    riesgoDelete,
    riesgoRestore
} = require('../controllers/riesgos')

const { existeRiesgoPorId } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', riesgosGet) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'titulo', 'El titulo es obligatorio' ).not().isEmpty(),
    validarCampos
], riesgoPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeRiesgoPorId ),
    validarCampos,
], riesgoGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'titulo', 'El titulo es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeRiesgoPorId ),
    validarCampos
], riesgoPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeRiesgoPorId ),
    validarCampos 
], riesgoDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeRiesgoPorId ),
    validarCampos 
], riesgoRestore)



module.exports = router