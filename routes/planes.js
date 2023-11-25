const { Router } = require( 'express' )

const { planesGet } = require('../controllers/planes')

const router =  Router()

router.get( '/', planesGet )

module.exports = router