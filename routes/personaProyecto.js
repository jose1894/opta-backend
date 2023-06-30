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
    personaProyectoPost,
    personaProyectoDelete,
    personaProyectoRestore
} = require('../controllers/personaProyecto')

const { existePersonaProyectoPorId, existeEmail } = require('../helpers/db-validators')
const router =  Router()

router.post( '/', [
    validarJWT,
    validarCampos
], personaProyectoPost)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePersonaProyectoPorId ),
    validarCampos 
],  personaProyectoDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePersonaProyectoPorId ),
    validarCampos 
], personaProyectoRestore)



module.exports = router