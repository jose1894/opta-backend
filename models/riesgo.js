const { Schema, model } = require('mongoose')

const RiesgoSchema = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
    },
    titulo: {
        type: String,
        required: [ true, 'El titulo es obligatorio'],
        uppercase: true,
    },
    descripcion: {
        type: String,
        default: '',
    },
    typeRisk: {
        type: String,
        default: 'Seleccione',
        enum: ['Seleccione','A nivel de estados financieros','A nivel de aseveraciones']
    },
    indice: {
        type: Schema.Types.ObjectId,
        ref: 'Enfoque',
    },
    riesgoProveniente: {
        type: String,
        default: 'Seleccione',
        enum: ['Seleccione','Transacciones Recurrentes','Transacciones no Recurrentes', 'Juicios y Estimaciones','accountingClosingEntries']
    },
    cuadrante: {
        type: Number,
        default: 0,
        enum: [0,1,2,3,4]
    },
    areaRiesgo: {
        type: Number,
        default: 0,
        enum: [0,1,2],
    },
    expectativasNegocio: {
        type: String,
        default: 'Seleccione',
        enum: ['Seleccione','Intencionales','No Intencionales','Viabilidad del negocio','Expectativas del cliente']
    },
    procedimientosAdicionales: {
        type: String,
        default: 'No',
        enum: ['Si','No']
    },
    inherente: {
        type: String,
        default: 'Bajo',
        enum: ['Medio', 'Bajo', 'Alto']
    },
    control: {
        type: String,
        default: 'Bajo',
        enum: ['Medio', 'Bajo', 'Alto']
    },
    analitico: {
        type: String,
        default: 'Bajo',
        enum: ['Medio', 'Bajo', 'Alto']
    },
    factorRiesgo: {
        type: String,
        default: '',
    },
    procesosInvolucrados: {
        type: String,
        default: '',
    },
    fuentesCausantes: {
        type: String,
        default: '',
    },
    ctaFA: {
        type: Schema.Types.Mixed,
        default: null,

    },
    consecuenciaEF: {
        type: String,
        default: '',
    },
    ase_a1: {
        type: String,
        default: '',
    },
    ase_a2: {
        type: String,
        default: '',
    },
    ase_a3: {
        type: String,
        default: '',
    },
    ase_a4: {
        type: String,
        default: '',
    },
    ase_a5: {
        type: String,
        default: '',
    },
    ase_a6: {
        type: String,
        default: '',
    },
    ase_b1: {
        type: String,
        default: '',
    },
    ase_b2: {
        type: String,
        default: '',
    },
    ase_b3: {
        type: String,
        default: '',
    },
    ase_b4: {
        type: String,
        default: '',
    },
    ase_b5: {
        type: String,
        default: '',
    },
    ase_b6: {
        type: String,
        default: '',
    },
    /*ase_c1: {
        type: String,
        default: '',
    },
    ase_c2: {
        type: String,
        default: '',
    },
    ase_c3: {
        type: String,
        default: '',
    },
    ase_c4: {
        type: String,
        default: '',
    },*/
    sel_mon: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },
    sel_mon2: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },
    sel_gen: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },
    sel_gen2: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },
    sel_esp: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },
    sel_esp2: {
        type: String,
        default: 'No',
        enum: ['No aprobado','Si','No']
    },

    sel2_ini: {
        type: String,
        default: 'No aprobado',
        enum: ['No aprobado','Efectivo','No efectivo']
    },
    refDes: {
        type: Schema.Types.Mixed,
        default: null,

    },
    padc_enf: {
        type: String,
        default: ''
    },

    padc_res: {
        type: String,
        default: ''
    },
    
    pfo_mpro: {
        type: String,
        default: ''
    },

    rda_resi: {
        type: String,
        default: ''
    },
    
    estado : {
        type: Number,
        default: 1,
        enum: [0,1,2]
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

RiesgoSchema.methods.toJSON = function() {
    const {__v, ...data } = this.toObject()
    return data
}

module.exports = model( 'Riesgo', RiesgoSchema)