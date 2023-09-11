const { response } = require("express");
const moment = require('moment');
const Tasa = require('../models/tasa')

const tasasGet = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            sortBy = 'siglas',
            sortDesc = true
        } = req.query;

        let options = { $or: [{ 'estado': 1 }, { 'estado': 0 }] };
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
        const [total, tasas] = await Promise.all([
            Tasa.countDocuments(query),
            Tasa.find(query)
                .populate('unidadNegocio')
                .populate('categoria')
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        res.send({ total, tasas, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {
        

        return res.status(500).json({
            msg: `Error del servidor al mostrar las tasas ${error}`
        })
    }

}

const tasasGetDelete = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            sortBy = 'nombre',
            sortDesc = true
        } = req.query;

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
        const [total, tasas] = await Promise.all([
            Tasa.countDocuments(query),
            Tasa.find(query)
                .populate('unidadNegocio')
                .populate('categoria')
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        res.send({ total, tasas, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {
        

        return res.status(500).json({
            msg: `Error del servidor al mostrar las tasas ${error}`
        })
    }

}

// obtenerEtado - populate {}
const tasaSelectGet = async (req, res = response) => {

    try {

        const { id } = req.params

        let tasa = await Tasa.findById(id)
            .populate('usuario')
            .populate('unidadNegocio')
            .populate('categoria')
        return res.status(200).send(
            tasa
        )

    } catch (error) {
        

        return res.status(500).json({
            msg: `Error del servidor al mostrar las tasas ${error}`
        })
    }
}


const tasaPost = async (req, res = response) => {


    try {
        const { codigo, fecha, siglas, unidadNegocio, categoria, anterior, actual, estado } = req.body

        const tasadDB = await Tasa.findOne({ codigo })

        if (tasadDB) {
            return res.status(400).json({
                msg: `El codigo ${tasadDB.codigo} ya existe`,
                data: tasadDB
            })
        }
        const data = {
            codigo,
            fecha,
            siglas,
            unidadNegocio,
            categoria,
            anterior,
            actual,
            estado,
            usuario: req.usuario._id
        }
        const tasa = new Tasa(data)

        //Guardar en DB
        await tasa.save()

        return res.status(201).json(tasa)

    } catch (error) {
        

        return res.status(500).json({
            msg: `Error del servidor al guardar una tasa ${error}`
        })

    }
}

// actualizarPais 
const tasaPut = async (req, res = response) => {

    try {

        const { id } = req.params

        const { status, usuario, ...data } = req.body

        data.siglas = data.siglas.toUpperCase()
        data.fecha = moment.utc(data.fecha).format('DD-MM-YYYY'),
            data.usuario = req.usuario._id
        const tasa = await Tasa.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).send(
            tasa
        )

    } catch (error) {
        

        return res.status(500).json({
            msg: `Error del servidor ${error}`
        })
    }
}

// borrarPais - status : false
const tasaDelete = async (req, res = response) => {

    const { id } = req.params
    const tasa = await Tasa.findByIdAndUpdate(id, { estado: 2 }, { new: true })

    res.json(tasa)
}

const allTasasGet = async (req, res = response) => {

    try {
        let options = { $or: [{ 'estado': 1 }/*, {'estado':2}*/] };
        query = { ...options }
        const { id } = req.params
        const tasas = await Tasa.find(query)
        //const { cargos } = listCargos.data
        res.send({ tasas })
    } catch (error) {
        
        return res.status(500).json({
            msg: `Error del servidor al mostrar las tasas ${query}`
        })
    }
}

// restaurarPais - status : true
const tasaRestore = async (req, res = response) => {
    const { id } = req.params
    const tasa = await Tasa.findByIdAndUpdate(id, { estado: true }, { new: true });
    if (!tasa) {
        return res.json(`La tasa no esta eliminada`)
    }
    res.json(tasa)
}

module.exports = {
    tasasGet,
    tasasGetDelete,
    tasaSelectGet,
    tasaPost,
    tasaPut,
    tasaDelete,
    allTasasGet,
    tasaRestore
}