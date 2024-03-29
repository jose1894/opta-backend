const { response } = require("express");
const Pais = require('../models/pais');
const counter = require("../models/counter");
const { functionFiltrar } = require("../helpers/filter-search")

// obtenerPaiss - paginado - total - populate

const paisesGet = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            estado = -1,
            sortBy = 'codigo',
            sortDesc = true
        } = req.query;

        let options = estado === -1 ? { $or: [{ 'estado': 1 }, { 'estado': 0 }] } : {$or: [{ 'estado': estado }]};

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
        const [total, paises] = await Promise.all([
            Pais.countDocuments(query),
            Pais.find(query)
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        res.send({ total, paises, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los paises ${error}`
        })
    }

}

const paisesGetDeleteOrInactive = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            sortBy = 'codigo',
            sortDesc = true,
            estado = 2,
        } = req.query;

        let options = { $or: [{ 'estado': estado }] };
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
        const [total, paises] = await Promise.all([
            Pais.countDocuments(query),
            Pais.find(query)
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        res.send({ total, paises, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los paises ${error}`
        })
    }

}


// obtenerPais - populate {}
const paisGet = async (req, res = response) => {

    try {

        const { id } = req.params

        const pais = await Pais.findById(id).populate('usuario')

        return res.status(200).send(
            pais
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar los paises ${error}`
        })
    }
}

const paisesPost = async (req, res = response) => {


    try {
        const { nombre, codigo, estado } = req.body

        const paisDB = await Pais.findOne({ $or: [{ nombre }, { codigo }] })

        if (paisDB) {
            return res.status(400).json({
                msg: (paisDB.nombre === nombre.toUpperCase()) ? `El pais ${paisDB.nombre} ya existe` :
                    `El codigo ${paisDB.codigo} ya existe`,
                data: paisDB
            })
        }

        const data = {
            nombre,
            codigo,
            estado,
            usuario: req.usuario._id
        }

        const pais = new Pais(data)

        //Guardar en DB
        await pais.save()

        return res.status(201).json(pais)

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al guardar un pais ${error}`
        })

    }
}

// actualizarPais 
const paisPut = async (req, res = response) => {

    try {

        const { id } = req.params

        const { usuario, ...data } = req.body

        data.nombre = data.nombre.toUpperCase()
        data.usuario = req.usuario._id

        const pais = await Pais.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).send(
            pais
        )

    } catch (error) {


        return res.status(500).json({
            msg: `Error del servidor al mostrar las paiss ${error}`
        })
    }
}

// borrarPais - status : false
const paisDelete = async (req, res = response) => {

    const { id } = req.params
    const pais = await Pais.findByIdAndUpdate(id, { estado: 2 }, { new: true })

    res.json(pais)
}

// restaurarPais - status : true
const paisRestore = async (req, res = response) => {

    const { id } = req.params
    const pais = await Pais.findByIdAndUpdate(id, { estado: 1 }, { new: true })

    if (!pais) {
        return res.json(`El país solicitado no se encuentra eliminado`)
    }

    res.json(pais)
}

module.exports = {
    paisesPost,
    paisesGet,
    paisGet,
    paisPut,
    paisDelete,
    paisRestore,
    paisesGetDeleteOrInactive
}