

const filtrarPorPropiedades = (propiedades, datos, termino) => {
    return datos.filter(item => 
        propiedades.some(propiedad => {
          let partes = propiedad.split('.');
          let valor = partes.reduce((obj, parte) => obj && obj[parte], item);
          return valor && valor.toLowerCase().includes(termino.toLowerCase());
        })
      );
}

const functionFiltrar = (q) => {
    let filter = {}
    if (q && q.length > 0) {
        const params = q.map(item => {
            const data = JSON.parse(item)
            let obj = [];
            Object.keys(data).forEach(key => {
                obj.push({[key]: { $regex: data[key], $options: 'i' }});
            });
            return obj
        })
        filter.$or = params[0];
    }
    return filter
}

module.exports = {
    filtrarPorPropiedades,
    functionFiltrar
}