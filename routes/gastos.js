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
    gastoPost, 
    gastosGet, 
    gastoGet, 
    gastoPut, 
    gastoDelete,
    gastoRestore,
    allGastosGet
} = require('../controllers/gastos')

const { existeGastoPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', gastosGet) 

router.get( '/allGastos', allGastosGet) 


//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'concepto', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'concepto', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos,
], gastoPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeGastoPorId ),
    validarCampos,
], gastoGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check( 'concepto', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'concepto', 'El nombre es obligatorio' ).not().isEmpty(),
    check('id').custom( existeGastoPorId ),
    validarCampos
], gastoPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeGastoPorId ),
    validarCampos 
], gastoDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeGastoPorId ),
    validarCampos 
], gastoRestore)

module.exports = router