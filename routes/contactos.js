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
    contactoDelete
} = require('../controllers/contactos')

const router =  Router()

//Crear pais - privado - Cualquier persona con token
router.delete( '/:id', [
    validarJWT,
    validarCampos
], contactoDelete)



module.exports = router