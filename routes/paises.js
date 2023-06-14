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
    paisesPost, 
    paisesGet, 
    paisGet, 
    paisPut, 
    paisDelete,
    paisRestore,
    paisesGetDeleteOrInactive
} = require('../controllers/paises')

const { existePaisPorId, existeEmail } = require('../helpers/db-validators')
const { Pais } = require('../models')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', paisesGet) 
router.get( '/paisesDelete', paisesGetDeleteOrInactive)

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 2 caracteres' ).isLength({ min: 2, max:2 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], paisesPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existePaisPorId ),
    validarCampos,
],
paisGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existePaisPorId ),
    validarCampos
], paisPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePaisPorId ),
    validarCampos 
], paisDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existePaisPorId ),
    validarCampos 
], paisRestore)



module.exports = router