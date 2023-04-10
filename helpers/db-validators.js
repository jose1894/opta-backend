const { 
    Categoria, 
    Usuario, 
    Role, 
    Pais, 
    Producto, 
    Estado, 
    Ciudad, 
    Aliado, 
    Referido, 
    Cliente, 
    Cargo,
    Moneda,
    Miembro,
    Sucursal,
    UnidadNegocio,
    Gasto
 } = require('../models')


const esRolValido = async ( rol = '' ) => {
    const existeRol = await Role.findOne({ rol })
    
    if ( !existeRol ){
        throw new Error(` El rol ${role} no esta agregado en la base de datos`)
    }

}

// Verificar que el correo existe
const existeEmail = async ( email = '' ) => {

    const existe = await Usuario.findOne({ email })

    if ( existe ) {
        throw new Error( `El correo ${ email } ya esta registrado`)
    }
}

const existeUsuarioPorId = async ( id ) => {

    const existe = await Usuario.findById({ id })

    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeCategoriaPorId = async ( id ) => {
    const existe = await Categoria.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existePaisPorId = async ( id ) => {
    const existe = await Pais.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeEstadoPorId = async ( id ) => {
    const existe = await Estado.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeCiudadPorId = async ( id ) => {
    const existe = await Ciudad.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeAliadoPorId = async ( id ) => {
    const existe = await Aliado.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeReferidoPorId = async ( id ) => {
    const existe = await Referido.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeClientePorId = async ( id ) => {
    const existe = await Cliente.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeCargoPorId = async ( id ) => {
    const existe = await Cargo.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeMonedaPorId = async ( id ) => {
    const existe = await Moneda.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeMiembroPorId = async ( id ) => {
    const existe = await Miembro.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeSucursalPorId = async ( id ) => {
    const existe = await Sucursal.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeUnidadNegociolPorId = async ( id ) => {
    const existe = await UnidadNegocio.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeGastoPorId = async ( id ) => {
    const existe = await Gasto.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeProductoPorId = async ( id ) => {
    const existe = await Producto.findById( id )
    // console.log( existe )
    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

/**
 * Validar colecciones permitidas
 */

const coleccionesPermitidas = ( coleccion = '', coleccionesPermitidas = []) => {
    const incluida = coleccionesPermitidas.includes( coleccion )

    if (!incluida ) {
        throw new Error(`La coleccion ${ coleccion } no es permitida - ${ coleccionesPermitidas }`)
    }

    return true
}

module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    existePaisPorId,
    existeEstadoPorId,
    existeCiudadPorId,
    coleccionesPermitidas,
    existeAliadoPorId,
    existeReferidoPorId,
    existeClientePorId,
    existeCargoPorId,
    existeMonedaPorId,
    existeMiembroPorId,
    existeSucursalPorId,
    existeUnidadNegociolPorId,
    existeGastoPorId
}