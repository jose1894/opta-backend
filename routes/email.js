const { Router, response } = require('express')
const {
    validarJWT
} = require('../middlewares')

const router =  Router()

const { sendEmail } = require('../controllers/email')

router.post( '/send-email', sendEmail)

module.exports = router