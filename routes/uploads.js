const { Router } = require( 'express' )
const { check } = require('express-validator')
const { 
    actualizarImagenCloudinary, 
    cargarArchivo, 
    mostrarImagen , 
    archivoProyectoYEnfoquesGet,
    descargarArchivo,
    deleteFileById,
    generarZip,
    verificarExisteCarpeta
} = require('../controllers/uploads')
const { coleccionesPermitidas } = require('../helpers')
const { validarArchivoSubir } = require('../middlewares/validar-archivo')
const { validarCampos } = require('../middlewares/validar-campos')
const { existeCarpetaZip } = require('../helpers/db-validators')
const { validarJWT } = require( '../middlewares')

const router = Router()

router.get( '/archivoProyectoYEnfoquesGet/:proyectoId/:enfoqueId', archivoProyectoYEnfoquesGet) 

router.post( '/',  [ validarJWT, validarArchivoSubir ] , cargarArchivo )

router.get( '/download/:id',  [ validarJWT ] , descargarArchivo )

router.get('/zipFile/:code', [ validarJWT ], generarZip)

router.get('/verificarExisteCarpeta/:name', [ validarJWT ] ,  verificarExisteCarpeta)

router.delete( '/:id',[
    validarJWT,    
    check('id', 'No es un ID valido').isMongoId()
],  deleteFileById)



router.put( '/:coleccion/:id', [
    validarArchivoSubir,
    check('id', 'El id debe ser un id de Mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, [ 'usuarios', 'productos']) ),
    validarCampos
], actualizarImagenCloudinary)

router.get('/:coleccion/:id', [
        check('id', 'El id debe ser un id de Mongo').isMongoId(),
        check('coleccion').custom( c => coleccionesPermitidas( c, [ 'usuarios', 'productos']) ),
        validarCampos
], mostrarImagen)

module.exports = router