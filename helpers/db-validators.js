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
    Gasto,
    AccionPerfil,
    Menu,
    Perfil,
    Tasa,
    Idioma,
    Profesion,
    Personal,
    Industria,
    Enfoque,
    Actividad,
    Proyecto
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
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeCategoriaPorCodigo = async ( codigo ) => {
    const existe = await Categoria.find( {codigo} )    
    if ( !existe ) {
        throw new Error( `El codigo ${ codigo } no existe`)
    }
}

const existePaisPorId = async ( id ) => {
    const existe = await Pais.findById( id )    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeEstadoPorId = async ( id ) => {
    const existe = await Estado.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeEstadoPorCodigo = async ( id ) => {
    const existe = await Estado.find( {codigo: id} )
    if ( !existe ) {
        throw new Error( `El codigo ${ id } no existe`)
    }
}

const existeCiudadPorId = async ( id ) => {
    const existe = await Ciudad.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}
const existeCiudadPorCodigo = async ( id ) => {
    const existe = await Ciudad.find( {codigo: id} )
    if ( !existe ) {
        throw new Error( `El codigo ${ id } no existe`)
    }
}

const existeCargoPorCodigo = async ( id ) => {
    const existe = await Cargo.find( {codigo: id} )
    if ( !existe ) {
        throw new Error( `El codigo ${ id } no existe`)
    }
}

const existeAliadoPorId = async ( id ) => {
    const existe = await Aliado.findById( id )    
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeReferidoPorId = async ( id ) => {
    const existe = await Referido.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeClientePorId = async ( id ) => {
    const existe = await Cliente.findById( id )
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

const existeMonedaPorCode = async ( codigo ) => {  
    const existe = await Moneda.findOne( { codigo } )
    if ( existe ) {
        throw new Error( `El codigo ${ code } ya esta registrado`)
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

const existeSucursalPorCodigo = async ( codigo ) => {
    const existe = await Sucursal.find({codigo})
    if ( !existe ) {
        throw new Error( `El codigo ${ id } no existe`)
    }
}

const existeIndustriaPorId = async ( id ) => {
    const existe = await Industria.findById( id )
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

const existePerfilPorId = async ( id ) => {
    const existe = await Perfil.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeProductoPorId = async ( id ) => {
    const existe = await Producto.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeAccionPerfilPorId = async ( id ) => {
    const existe = await AccionPerfil.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeAccionPerfilPorCodigo = async ( codigo ) => {
    const existe = await AccionPerfil.find( {codigo} )
    if ( !existe ) {
        throw new Error( `El codigo ${ codigo } no existe`)
    }
}

const existeMenuPorId = async ( id ) => {
    const existe = await Menu.findById( id )
    if ( !existe ) {
        throw new Error( `El id ${ id } no existe`)
    }
}

const existeMenuPorCodigo = async ( codigo) => {
    const existe = await Menu.find( {codigo} )
    if ( !existe ) {
        throw new Error( `El codigo ${ codigo } no existe`)
    }
}



const existeTasaPorId = async ( id ) => {
    const existe = await Tasa.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existeTasaPorCodigo = async ( codigo ) => {
    const existe = await Tasa.find({codigo})
    if ( !existe ) {
        throw new Error( `El registro ${ codigo } no existe`)
    }
}

const existeIdiomaPorId = async ( id ) => {
    const existe = await Idioma.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existeProfesionPorId = async ( id ) => {
    const existe = await Profesion.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existePersonalPorId = async ( id ) => {
    const existe = await Personal.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existeEnfoquePorId = async ( id ) => {
    const existe = await Enfoque.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existeActividadPorId = async ( id ) => {
    const existe = await Actividad.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
    }
}

const existeProyectoPorId = async ( id ) => {
    const existe = await Proyecto.findById(id)
    if ( !existe ) {
        throw new Error( `El registro ${ id } no existe`)
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
    existeCategoriaPorCodigo,
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
    existeMonedaPorCode,
    existeMiembroPorId,
    existeSucursalPorId,
    existeUnidadNegociolPorId,
    existeGastoPorId,
    existeAccionPerfilPorId,
    existeAccionPerfilPorCodigo,
    existeMenuPorId,
    existeMenuPorCodigo,
    existePerfilPorId,
    existeTasaPorId,
    existeTasaPorCodigo,
    existeIdiomaPorId,
    existeProfesionPorId,
    existePersonalPorId,
    existeIndustriaPorId,
    existeEnfoquePorId,
    existeActividadPorId,
    existeProyectoPorId,
    existeSucursalPorCodigo,
    existeCiudadPorCodigo
}