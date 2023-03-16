const { Router } = require( 'express' )
const { check } = require('express-validator')
const { login, googleSignIn, logout } = require('../controllers/auth')
const { usuarioRegister } = require('../controllers/usuarios')
const { existeEmail, esRolValido } = require('../helpers')
const { validateConfirmPassword, validarCampos, validarJWT } = require('../middlewares')

const router = Router()

router.post( '/login', [
    check( 'email', 'El email es obligatorio').isEmail(),
    check( 'password', 'La contrasena es obligatoria').not().isEmpty(),
    validarCampos
]
, login )

router.post( '/google', [
    check( 'id_token', 'El id_token es obligatorio').not().isEmpty(),
    validarCampos
]
, googleSignIn )

router.post('/register', [
    check( 'username', 'Username is required').not().isEmpty(),
    check( 'firstname', 'Firstname is required').not().isEmpty(),
    check( 'lastname', 'Lastname is required').not().isEmpty(),
    check("password", `Password must be between 8 to 15 characters, at least an uppercase character, at least a lowercase character and at least one of those special characters "!@#$%^&*.,"`)
        .trim()
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,15}$/, "i"),
    validateConfirmPassword,
    // check( 'password', 'El password debe ser de mas de 6 lentras').isLength({ min: 6}),
    check( 'email' , 'Email not valid').isEmail(),
    check( 'email' ).custom( existeEmail ),
    // check('role', 'Role not valid').isIn(['ADMIN_ROLE','USER_ROLE']),
    // check( 'role' ).custom( esRolValido ),
    validarCampos,
], usuarioRegister)

router.post('/logout',[
    // validarJWT
], logout)

module.exports = router