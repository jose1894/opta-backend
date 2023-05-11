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
    contactoPost
} = require('../controllers/contactos')

const router =  Router()

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    validarCampos
], contactoPost)



module.exports = router