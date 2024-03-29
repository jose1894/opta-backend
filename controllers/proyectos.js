const { response } = require("express");
const moment = require('moment');
const Proyecto = require('../models/proyecto')
const ProyectosView = require('../models/proyectosView')
const Enfoque = require('../models/enfoque')
const ProyectoEnfoque = require('../models/proyectoEnfoque')
const fs = require('fs');
const proyectoEnfoque = require("../models/proyectoEnfoque");
const { filtrarPorPropiedades } = require("../helpers/filter-search")

// obtenerPaiss - paginado - total - populate

const proyectosGet = async (req, res = response) => {
    try {
        const {
            q = '',
            q2 = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy = 'codigo',
            sortDesc = true
        } = req.query;
        
        
        let jsonQ2 = q2
        if(typeof q2 === "string") {
            jsonQ2 = (q2) ? JSON.parse(q2) : {}
        }
        let options = estado === -1 ? { $or: [{ 'estado': 1 }, { 'estado': 0 }] } : { $or: [{ 'estado': estado }] };

        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}
        sort[sortBy] = (sortDesc === "false") ? -1 : 1;
        if (q) {
            filter = functionFiltrar(q);
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = { ...options }
        }
        let [total, proyectos] = await Promise.all([
            Proyecto.countDocuments(query),
            Proyecto.find(query)
                .populate({
                    path: 'cliente'
                })
                .populate({
                    path: 'socio'
                })
                .populate({
                    path: 'sucursal'
                })
                .populate({
                    path: 'membresia'
                })
            ])

        
        if(q2) {
            const keys = jsonQ2?.filters
            const searchText = jsonQ2.search 
            const proyectosFilter =  filtrarPorPropiedades(keys, proyectos, searchText);
            proyectos = proyectosFilter
            total = proyectosFilter.length
        } 
        res.send({ total, proyectos, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los proyectos ${error}`
        })
    }

}

/*const filtrarPorPropiedades = (propiedades, datos, termino) => {
    return datos.filter(item => 
        propiedades.some(propiedad => {
          let partes = propiedad.split('.');
          let valor = partes.reduce((obj, parte) => obj && obj[parte], item);
          return valor && valor.toLowerCase().includes(termino.toLowerCase());
        })
      );
}*/

const functionFiltrar = (q) => {
    const filter = {};
    if (q && q.length > 0) {
      const orFilters = q.map(item => {
        const data =  JSON.parse(item)
        const { fecha, cliente, codigo, socio } = data
        const dateFilter = fecha ? { fecha: { $gte: moment(fecha).toDate() } } : {};
        const clientFilter = cliente ? { cliente } : {};
        const codeFilter = codigo ? { codigo } : {};
        const socioFilter = socio ? { socio } : {};
        return { ...dateFilter, ...clientFilter, ...codeFilter, ...socioFilter };
      });      
      filter.$or = orFilters;
    }
    return filter;
}

const proyectosGetDeleted = async (req, res = response) => {
    try {
        const {
            q = '',
            q2 = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy = 'codigo',
            sortDesc = true
        } = req.query;
        
        let jsonQ2 = (q2) ? JSON.parse(q2) : {}
        let options = { $or: [{ 'estado': 2 }] };
        const sort = {}
        const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
        let filter = {}
        let query = {}

        sort[sortBy] = (sortDesc === "false") ? -1 : 1;

        if (q) {
            filter = functionFiltrar(q);
            query = {
                ...filter,
                '$and': [
                    options
                ]
            }
        } else {
            query = { ...options }
        }

        // Promise . all envia varias promesas simultaneas
        let [total, proyectos] = await Promise.all([
            Proyecto.countDocuments(query),
            Proyecto.find(query).populate('cliente').populate('socio').skip(skip).sort(sort).limit(perPage)
        ])

        if(q2) {
            const keys = jsonQ2?.filters
            const searchText = jsonQ2.search 
            const proyectosFilter =  filtrarPorPropiedades(keys, proyectos, searchText);
            proyectos = proyectosFilter
            total = proyectosFilter.length
        } 

        res.send({ total, proyectos, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los proyectos ${error}`
        })
    }

}

// obtenerPais - populate {}
const proyectoGet = async (req, res = response) => {

    try {

        const { id } = req.params

        const proyecto = await Proyecto.findById(id)
            .populate('cliente')
            .populate('creado')
            .populate('socio')
            .populate('gerente')
            .populate('sucursal')
            .populate('unidadNegocio')
            .populate('tipoServicio')
            .populate('membresia')
            .populate('usuario')

        return res.status(200).send(
            proyecto
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar el proyecto ${error}`
        })
    }
}

const allProyectosGet = async (req, res = response) => {

    try {
        let options = { $or: [{ 'estado': 1 }/*, {'estado':0}*/] };
        query = { ...options }
        const { id } = req.params
        const proyectos = await Proyecto.find(query)
        res.send({ proyectos })
    } catch (error) {

        return res.status(500).json({
            msg: `Error del servidor al mostrar los proyectos ${query}`
        })
    }
}

const proyectoPost = async (req, res = response) => {


    try {
        const {
            codigo,
            fecha,
            creado,
            cliente,
            socio,
            gerente,
            sucursal,
            unidadNegocio,
            tipoServicio,
            descripcionServicio,
            estado } = req.body

        const proyectoDB = await Proyecto.findOne({ codigo })

        if (proyectoDB) {
            return res.status(400).json({
                msg: `El proyecto ${proyectoDB.codigo} ya existe`,
                data: proyectoDB
            })
        }

        const data = {
            creado,
            cliente,
            socio,
            gerente,
            sucursal,
            unidadNegocio,
            tipoServicio,
            descripcionServicio,
            membresia: req.usuario.membresia._id,
            usuario: req.usuario._id,
            estado
        }

        const proyecto = new Proyecto(data)
        //Guardar en DB
        await proyecto.save()
        crearEnfoquesEnProyectos(proyecto)

        

        return res.status(201).json(proyecto)

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al guardar un proyecto ${error}`
        })

    }
}

// actualizarPais 
const proyectoPut = async (req, res = response) => {

    try {

        const { id } = req.params

        const { status, usuario, ...data } = req.body
        data.usuario = req.usuario._id
        data.membresia = req.usuario.membresia._id
        const fechaNew = moment(data.fecha, "DD-MM-YYYY").toDate();
        data.fecha = fechaNew

        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true })
        crearEnfoquesEnProyectos(proyecto)

        return res.status(200).send(
            proyecto
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al modificar un proyecto ${error}`
        })
    }
}

const crearEnfoquesEnProyectos = async (proyecto) => {
    try {
        let enfoques = await Enfoque.find({ $and: [{ 'estado': 1 }, { tipoNodo: { $ne: 0 } }] })
        const enfoquesPadre = enfoques.filter((e) => e.tipoNodo === 1)
        const enfoquesHijos = enfoques.filter((e) => e.tipoNodo === 2)
        const dataEnfoqueP = []
        enfoquesPadre.map(async (enf) => {
            if (!fs.existsSync(`./projects/${proyecto.codigo}/${enf.ruta}/`)) {
                fs.mkdirSync(`./projects/${proyecto.codigo}/${enf.ruta}/`, { recursive: true });
                const dataResult = { enfoque: enf._id, proyecto: proyecto._id }
                dataEnfoqueP.push(dataResult)
            }
        })
        enfoquesHijos.map((enf) => {
            if (enf.visible === 1 && !fs.existsSync(`./projects/${proyecto.codigo}/${enf.ruta}/`)) {
                fs.mkdirSync(`./projects/${proyecto.codigo}/${enf.ruta}/`, { recursive: true });
                const dataResult = { enfoque: enf._id, proyecto: proyecto._id }
                dataEnfoqueP.push(dataResult)
            }
        })
        const processedUsers = await Promise.all(dataEnfoqueP.map(guardarEnfoqueProyecto));
    } catch (error) { }
}

const guardarEnfoqueProyecto = async (data) => {
    const proyectoEnf = new ProyectoEnfoque(data)
    await proyectoEnf.save()
    return { ...proyectoEnf.toObject(), data };
};

// borrarPais - status : false
const proyectoDelete = async (req, res = response) => {

    const { id } = req.params
    const proyecto = await Proyecto.findByIdAndUpdate(id, { estado: 2 }, { new: true })

    res.json(proyecto)
}

// restaurarPais - status : true
const proyectoRestore = async (req, res = response) => {

    const { id } = req.params
    const proyecto = await Proyecto.findOneAndUpdate({ id, estado: false }, { estado: true }, { new: true })

    if (!proyecto) {
        return res.json(`El proyecto solicitado no se encuentra eliminado`)
    }

    res.json(proyecto)
}

module.exports = {
    proyectoPost,
    proyectosGet,
    proyectoGet,
    proyectoPut,
    proyectoDelete,
    proyectoRestore,
    allProyectosGet,
    proyectosGetDeleted
}