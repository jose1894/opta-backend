const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

const { TokenExpiredError } = jwt;

const validarJWT = async ( req = request, res = response, next ) => {

    const token = req.header('x-token')

    if ( !token ) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }
    
    try{
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY )
         
        req.uid = uid

        const usuario = await Usuario.findById( uid )

        if ( !usuario ) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            })
        }


        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            })
        }

        req.usuario = usuario

        next()
    } catch( error ) {

        if (error instanceof TokenExpiredError) {
            res.status(401).json({ 
                msg: "El token ha expirado!" 
            });
          } else  {
            res.status(401).json({
                msg: "Token no valido"
            })
          }

        

    }
}

module.exports = {
    validarJWT
}