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
    idiomaPost,
    idiomasGet,
    idiomaGet,
    idiomaPut,
    idiomaDelete,
    idiomaRestore,
    allIdiomasGet,
    idiomasGetDeleted
} = require('../controllers/idiomas')

const { existeIdiomaPorId, existeEmail } = require('../helpers/db-validators')
const { Pais } = require('../models')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', idiomasGet) 

router.get( '/allIdiomas', allIdiomasGet)

router.get( '/idiomasDeleted', idiomasGetDeleted) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], idiomaPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIdiomaPorId ),
    validarCampos,
], idiomaGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeIdiomaPorId ),
    validarCampos
], idiomaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeIdiomaPorId ),
    validarCampos 
], idiomaDelete)

//Borrar una pais - Admin
router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeIdiomaPorId ),
    validarCampos 
], idiomaRestore)



module.exports = router