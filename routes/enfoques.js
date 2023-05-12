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
    enfoquePost
} = require('../controllers/enfoques')

const { existeEnfoquePorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()

router.post( '/', [
    validarJWT,
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], enfoquePost)

module.exports = router