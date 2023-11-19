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
    industriaPost,
    industriasGet,
    industriaGet,
    industriaPut,
    industriaDelete,
    industriaRestore,
    allIndustriasGet,
    industriasGetDeleted
} = require('../controllers/industrias')

const { existeIndustriaPorId, existeEmail } = require('../helpers/db-validators')
const { Pais } = require('../models')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', industriasGet) 

router.get( '/allIndustrias', allIndustriasGet)

router.get( '/industriasDeleted', industriasGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], industriaPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIndustriaPorId ),
    validarCampos,
], industriaGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeIndustriaPorId ),
    validarCampos
], industriaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeIndustriaPorId ),
    validarCampos 
], industriaDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeIndustriaPorId ),
    validarCampos 
], industriaRestore)



module.exports = router