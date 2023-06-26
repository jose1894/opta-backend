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
    personastGet,
    personasGetDeleted,
    personaGet,
    allPersonaGet ,
    personaPut,
    personaDelete,
    personaRestore,
    personaPost,
    getListTipoPersonal
} = require('../controllers/personal')

const { existePersonalPorId, existeEmail } = require('../helpers/db-validators')
const { Pais } = require('../models')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', personastGet) 

router.get( '/allPersona', allPersonaGet)

router.get( '/personaDeleted', personasGetDeleted) 

router.get( '/listTipoPersonal/:tipoPersonal', getListTipoPersonal) 


//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'iDFiscal', 'El id fiscal es obligatorio' ).not().isEmpty(),
    validarCampos
],  personaPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existePersonalPorId ),
    validarCampos,
],personaGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check( 'iDFiscal', 'El id fiscal es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existePersonalPorId ),
    validarCampos
], personaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePersonalPorId ),
    validarCampos 
], personaDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePersonalPorId ),
    validarCampos 
], personaRestore)



module.exports = router