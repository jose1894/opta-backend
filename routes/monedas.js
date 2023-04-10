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
    monedaPost, 
    monedasGet, 
    monedaGet, 
    monedaPut, 
    monedaDelete,
    monedaRestore,
    allMonedasGet
} = require('../controllers/moneda')

const { existeMonedaPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', monedasGet) 

router.get( '/allMonedas', allMonedasGet)

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], monedaPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeMonedaPorId ),
    validarCampos,
],monedaGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeMonedaPorId ),
    validarCampos
], monedaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMonedaPorId ),
    validarCampos 
], monedaDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMonedaPorId ),
    validarCampos 
], monedaRestore)
module.exports = router