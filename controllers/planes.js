const { response } = require("express");
const Plan = require('../models/plan');

const planesGet = async (req, res = response) => {
    const query = { estado: 1 }
    const planes = await Plan.find(query)
    res.send({planes})
}

module.exports = {
    planesGet
}