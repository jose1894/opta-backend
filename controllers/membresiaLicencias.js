const { response } = require("express");
const moment = require('moment');
const bcryptjs = require('bcryptjs')
const MembresiaLicencia = require('../models/membresiaLicencia');
const { generarLicencia } = require("../helpers/generar-jwt");

const membresiaLicenciaGet = async (req, res = response) => {
    try {
        const {
            q = '',
            page = 0,
            perPage = 10,
            sortBy = 'descripcion',
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

        const [total, licencias] = await Promise.all([
            MembresiaLicencia.countDocuments(query),
            MembresiaLicencia.find(query)
                .populate('plan')
                .populate('membresia')
                .skip(skip)
                .sort(sort)
                .limit(perPage)
        ])

        res.send({ total, licencias, perPage: parseInt(perPage), page: parseInt(page) })

    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar las licencias ${error}`
        })
    }

}

const getLicenciaByMembresia = async (req, res = response) => {
    try {

        const { membresia } = req.params
        console.log(membresia)

        const licencia = await MembresiaLicencia.findOne({
            "$and": [
                { membresia: membresia },
                { 'estado': 1 }
            ]
        }).populate('plan')
        return res.status(200).send({ licencia })
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar la licencia ${error}`
        })
    }
}

const membresiaLicenciaPost = async (req, res = response) => {
    try {
        const { fechaActual, fechaFinal, plan, membresia, estado } = req.body
        const membresiaLicenciaDB = await MembresiaLicencia.findOne({
            "$and": [
                { membresia: membresia },
                { 'estado': 1 }
            ]
        })

        if (membresiaLicenciaDB) {
            return res.status(400).json({
                msg: `La menbresia tiene una licencia activa`,
                data: membresiaLicenciaDB
            })
        }

        const payload = `${fechaActual}-${fechaFinal}`
        const licencia = await generarLicencia(payload, plan.dias);
        const data = {
            fechaInicio: moment(fechaActual, "YYYY-MM-DD"),
            fechaFinal: moment(fechaFinal, "YYYY-MM-DD"),
            licencia,
            plan: plan.id,
            membresia,
            usuario: req.usuario._id,
            estado
        }

        const membresiaLicenciaSave = new MembresiaLicencia(data)
        await membresiaLicenciaSave.save()
        return res.status(201).json(membresiaLicenciaSave)

    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al guardar la licencia ${error}`
        })
    }
}

const membresiaLicenciaPut = async (req, res = response) => {

    try {
        const { id } = req.params
        let { fechaActual, fechaFinal, licencia, plan, membresia, estado } = req.body
        const payload = `${fechaActual}-${fechaFinal}`
        const licenciaEncriptada = await generarLicencia(payload, plan.dias);
        const dataSave = {
            fechaInicio: moment(fechaActual, "YYYY-MM-DD"),
            fechaFinal: moment(fechaFinal, "YYYY-MM-DD"),
            licencia: licenciaEncriptada,
            plan: plan.id,
            membresia,
            usuario: req.usuario._id
        }
        const modifyLicencia = await MembresiaLicencia.findByIdAndUpdate(id, dataSave, { new: true })
        return res.status(200).send({data: modifyLicencia})
    } catch (error) {
        return res.status(500).json({
            msg: `Error del servidor al mostrar la licencia ${error}`
        })
    }
}

const membresiaLicenciaDelete = async (req, res = response) => {
    const { id } = req.params
    const miembro = await MembresiaLicencia.findByIdAndUpdate(id, { estado: 2 }, { new: true })
    res.json(miembro)
}

module.exports = {
    membresiaLicenciaGet,
    getLicenciaByMembresia,
    membresiaLicenciaPost,
    membresiaLicenciaPut,
    membresiaLicenciaDelete
}