const { Router } = require( 'express' )
const { check } = require('express-validator')
const validator = require('validator');

const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require( '../middlewares')

const { 
    categoriaPost,
    categoriasGet,
    categoriaGet,
    categoriaPut,
    categoriaDelete,
    categoriaRestore,
    allCategoriasGet,
    categoriasGetDeleted,
    categoriasPorUnidadNegocio} = require('../controllers/categorias')

const { existeCategoriaPorId, existeEmail } = require('../helpers/db-validators')
const { Categoria } = require('../models')

const router =  Router()


//Obtener todas las categorias - publico
router.get( '/', categoriasGet )

router.get( '/categoriasDeleted', categoriasGetDeleted )

router.get( '/allCategorias', allCategoriasGet )

// Obtener una categoria - publico
router.get( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos,
],
categoriaGet)

router.get( '/categoriasPorUnidadNegocio/:id', categoriasPorUnidadNegocio) 

//Crear categoria - privado - Cualquier persona con token
router.post( '/', [
    validarJWT,
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'codigo', 'La longitud debe ser de 3 caracteres' ).isLength({ min: 2, max:3 }),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    validarCampos
], categoriaPost)

//Actualizar categoria - privado - Cualquier persona con token
router.put( '/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check( 'codigo', 'El codigo es obligatorio. El código es el de la normativa ISO 3166' ).not().isEmpty(),
    check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'id' ).custom( existeCategoriaPorId ),
    validarCampos
], categoriaPut)

//Borrar una categoria - Admin
router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeCategoriaPorId ),
    validarCampos 
], categoriaDelete)

router.put( '/restore/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeCategoriaPorId ),
    validarCampos 
], categoriaRestore)



module.exports = router