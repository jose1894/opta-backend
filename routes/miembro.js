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
    miembroPost, 
    miembrosGet, 
    miembroGet, 
    miembroPut, 
    miembroDelete,
    miembroRestore,
    allMiembrosGet
} = require('../controllers/miembros')

const { existeMiembroPorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', miembrosGet) 

router.get( '/allMiembros', allMiembrosGet) 


//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'iDFiscal', 'La longitud debe ser de 12 caracteres' ).isLength({ min: 1, max:12 }),
    check( 'calle', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'paginaWeb', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'nombreContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),    
    check( 'apellidoContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'cargo', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }), 
    check( 'correoContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max: 250 }),
    check( 'telefonoCelu', 'La longitud debe ser de 16 caracteres' ).isLength({ min: 1, max: 16 }), 
    check( 'telefonoOfic', 'La longitud debe ser de 16 caracteres' ).isLength({ min: 1, max:250 }), 
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos,
], miembroPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeMiembroPorId ),
    validarCampos,
],miembroGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'iDFiscal', 'La longitud debe ser de 12 caracteres' ).isLength({ min: 1, max:12 }),
    check( 'calle', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'paginaWeb', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'nombreContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),    
    check( 'apellidoContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'cargo', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }), 
    check( 'correoContact', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max: 250 }),
    check( 'telefonoCelu', 'La longitud debe ser de 16 caracteres' ).isLength({ min: 1, max: 16 }), 
    check( 'telefonoOfic', 'La longitud debe ser de 16 caracteres' ).isLength({ min: 1, max:250 }), 
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeMiembroPorId ),
    validarCampos
], miembroPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMiembroPorId ),
    validarCampos 
], miembroDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeMiembroPorId ),
    validarCampos 
], miembroRestore)

module.exports = router