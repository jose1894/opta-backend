const jwt = require('jsonwebtoken') 

const generarJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {

        const payload = { uid }

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err, token ) => {
            
            if ( err ) {
                console.log(err)
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token ) 
            }
        })
    })
}

const generarRefreshJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {

        const payload = { uid }

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '8h'
        }, ( err, token ) => {
            
            if ( err ) {
                console.log(err)
                reject( 'No se pudo generar el refresh token' )
            } else {
                resolve( token ) 
            }
        })
    })
}

const generarLicencia = ( uid = '', dias = 0 ) => {
    return new Promise( (resolve, reject) => {

        const payload = { uid }

        jwt.sign( payload, process.env.SECRETYLICENCIAKEY, {
            expiresIn: `${dias}d`
        }, ( err, licencia ) => {
            
            if ( err ) {
                console.log(err)
                reject( 'No se pudo generar la licencia' )
            } else {
                resolve( licencia ) 
            }
        })
    })
}
module.exports = {
    generarJWT,
    generarRefreshJWT,
    generarLicencia
}