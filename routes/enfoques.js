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
    enfoquePost,
    enfoquesGet,
    enfoquePut,
    enfoqueDelete,
    enfoqueById,
    getChildrenEnfoque,
    getChildrenPaginateGet
} = require('../controllers/enfoques')

const { existeEnfoquePorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()

router.get( '/', enfoquesGet)

router.get( '/getChildren/:id', getChildrenEnfoque) 

router.get( '/getChildrenPaginate/:id', getChildrenPaginateGet) 

router.post( '/', [
    validarJWT,
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], enfoquePost)

router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos,
], enfoqueById)

router.put( '/:id', [
    validarJWT,
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], enfoquePut)

router.delete('/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], enfoqueDelete)


module.exports = router