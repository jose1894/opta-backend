const { Router, response } = require( 'express' )
const validator = require('validator');

const { validarJWT } = require( '../middlewares')

const { 
    membresiaLicenciaGet,
    getLicenciaByMembresia,
    membresiaLicenciaPost,
    membresiaLicenciaPut,
    membresiaLicenciaDelete
} = require('../controllers/membresiaLicencias')

const router =  Router()


//Obtener todos los paises - publico
router.get( '/', [
    validarJWT
], membresiaLicenciaGet) 

router.get( '/licencia/:membresia', [
    validarJWT
], getLicenciaByMembresia)

router.post( '/', [
    validarJWT
], membresiaLicenciaPost)

router.put( '/:id', [
    validarJWT,
], membresiaLicenciaPut)

//Borrar una pais - Admin
router.delete( '/:id',[
    validarJWT
], membresiaLicenciaDelete)

module.exports = router