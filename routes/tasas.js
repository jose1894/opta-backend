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
    tasasGet,
    tasasGetDelete,
    tasaSelectGet,
    tasaPost,
    tasaPut,
    tasaDelete,
    allTasasGet,
    tasaRestore
} = require('../controllers/tasas')

const { existeTasaPorId, existeEmail, existeTasaPorCodigo } = require('../helpers/db-validators')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', tasasGet) 

router.get( 'allTasas', allTasasGet)

router.get( '/tasasDelete', tasasGetDelete) 

//Crear pais - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'codigo' ).custom(existeTasaPorCodigo),
    validarCampos
], tasaPost)

// Obtener un pais - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeTasaPorId ),
    validarCampos,
], tasaSelectGet)


//Actualizar pais - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'id' ).custom( existeTasaPorId ),
    validarCampos
], tasaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeTasaPorId ),
    validarCampos 
], tasaDelete)

//Borrar una pais - Admin
router.delete( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeTasaPorId ),
    validarCampos 
], tasaRestore)



module.exports = router