const { Router } = require( 'express' )
const { check } = require('express-validator')

const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole,
    validateConfirmPassword,
} = require( '../middlewares')

const { esRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators')

const { 
    usuariosGet,
    usuariosPost, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch } = require('../controllers/usuarios')

const router =  Router()

router.get('/', usuariosGet)

router.post('/', [
    check( 'username', 'El username es obligatorio').not().isEmpty(),
    check( 'firstname', 'El nombre es obligatorio').not().isEmpty(),
    check( 'lastname', 'El apellido es obligatorio').not().isEmpty(),
    check("password", `Password must have between 8 and 15 characters, 
                        at least an uppercase character, 
                        at least a lowercase character,
                        `).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,15}$/, "i"),
    validateConfirmPassword,
    // check( 'password', 'El password debe ser de mas de 6 lentras').isLength({ min: 6}),
    check( 'email' , 'El email no es valido').isEmail(),
    check( 'email' ).custom( existeEmail ),
    check('role', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check( 'role' ).custom( esRolValido ),
    validarCampos,
], usuariosPost)

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeUsuarioPorId ),
    check( 'rol' ).custom( esRolValido ),
    validarCampos
], usuariosPut)

router.delete('/:id',[
    validarJWT,
    // esAdminRole,
    tieneRole( 'ADMIN_ROLE', 'VENTAS_ROLE'),
    check( 'id', 'No es un ID valido').isMongoId(),
    check( 'id' ).custom( existeUsuarioPorId ),
    // validarCampos
], usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router