const { validationResult } = require('express-validator')

const asignarValorAlArreglo = ({ errorsReturn, value}) => {
    if ( Array.isArray(errorsReturn[value.param])){
        errorsReturn[value.param].push(value.msg)
        return;
    }    
    errorsReturn[value.param] = [value.msg]
    return
}

const validarCampos = ( req, res, next ) => {

    const errors = validationResult( req )
    if( !errors.isEmpty() ) {
        const errorsReturn = {}

        errors.errors.forEach((value) => {
            if ('param' in value) {
                asignarValorAlArreglo({errorsReturn, value})
            }
        });
        return res.status(400).json({errors: errorsReturn})
    }

    next()
}

module.exports = {
    validarCampos
}