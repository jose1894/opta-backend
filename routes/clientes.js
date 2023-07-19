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
    clientePost,
    clientesGet,
    clienteGet,
    clientePut,
    clienteDelete,
    clienteRestore,
    allClientesGet,
    clientesGetDeleted,
    buscarClienteGet
} = require('../controllers/clientes')

const { existeClientePorId, existeEmail } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', clientesGet) 

router.get( '/allClientes', allClientesGet) 
router.get( '/clientesDeleted', clientesGetDeleted) 

router.get( '/buscarCliente/:query', buscarClienteGet)


//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'iDFiscal', 'La longitud debe ser de 12 caracteres' ).isLength({ min: 1, max:12 }), 
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos,
], clientePost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeClientePorId ),
    validarCampos,
],clienteGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'La longitud debe ser de 250 caracteres' ).isLength({ min: 1, max:250 }),
    check( 'iDFiscal', 'La longitud debe ser de 12 caracteres' ).isLength({ min: 1, max:12 }),
    check( 'id' ).custom( existeClientePorId  ),
    validarCampos
], clientePut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeClientePorId  ),
    validarCampos 
], clienteDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeClientePorId  ),
    validarCampos 
], clienteRestore)

module.exports = router