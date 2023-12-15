const path = require('path')
const { response } = require('express');
const { model } = require('mongoose');
const { subirArchivo } = require('../helpers');
const { Usuario, Producto } = require('../models');
const { param } = require('../routes/auth');
const cloudinary = require('cloudinary').v2
const Upload = require('../models/upload')
const archiver = require('archiver');
const fs = require('fs');


cloudinary.config(process.env.CLOUDINARY_URL)

const cargarArchivo = async (req, res = response) => {
  try {
    const { ruta, type, nombre, proyecto, enfoque } = req.body

    const fileDB = await Upload.findOne({ nombre })

    if (fileDB) {
      return res.status(400).json({
        msg: (fileDB.nombre === nombre) ? `El archivo ${fileDB.nombre} ya existe` :
          ``,
        data: fileDB
      })
    }
    const nombreEncriptado = await subirArchivo(req.files, undefined, '', `projects/${ruta}/`)
    const data = {
      nombre,
      nombreBinario: nombreEncriptado,
      ruta,
      type,
      proyecto,
      enfoque,
      usuario: req.usuario._id
    }

    const fileSave = new Upload(data)

    //Guardar en DB
    await fileSave.save()

    return res.status(201).json(fileSave)
  } catch (msg) {
    res.status(400).json({
      msg
    })

  }

}



const actualizarImagen = async (req, res = response) => {

  const { id, coleccion } = req.params

  let modelo;

  switch (coleccion) {
    case 'usuarios':
      modelo = await Usuario.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El usuario con el id ${id} no existe`
        })
      }
      break;
    case 'productos':
      modelo = await Producto.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El producto con el id ${id} no existe`
        })
      }
      break;

    default:
      return res.status(500).json({ msg: `Se me olvido validar esto` })
  }

  if (modelo.img) {
    const pathImage = path.join(__dirname, '../uploads/', coleccion, modelo.img)

    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage)
    }
  }

  const nombre = await subirArchivo(req.files, undefined, coleccion)
  modelo.img = nombre

  await modelo.save()

  res.json({ modelo })
}

const actualizarImagenCloudinary = async (req, res = response) => {

  const { id, coleccion } = req.params

  let modelo;

  switch (coleccion) {
    case 'usuarios':
      modelo = await Usuario.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El usuario con el id ${id} no existe`
        })
      }
      break;
    case 'productos':
      modelo = await Producto.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El producto con el id ${id} no existe`
        })
      }
      break;

    default:
      return res.status(500).json({ msg: `Se me olvido validar esto` })
  }

  if (modelo.img) {
    const nombreArr = modelo.img.split('/')
    const nombre = nombreArr[nombreArr.length - 1]
    const [public_id] = nombre.split('.')

    cloudinary.uploader.destroy(public_id)

  }

  const { tempFilePath } = req.files.archivo

  const { secure_url } = await cloudinary.uploader.upload(tempFilePath)

  modelo.img = secure_url

  await modelo.save()

  res.json({ modelo })
}

const mostrarImagen = async (req, res = response) => {

  const { id, coleccion } = req.params

  let modelo;

  switch (coleccion) {
    case 'usuarios':
      modelo = await Usuario.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El usuario con el id ${id} no existe`
        })
      }
      break;
    case 'productos':
      modelo = await Producto.findById(id)

      if (!modelo) {
        return res.status(400).json({
          msg: `El producto con el id ${id} no existe`
        })
      }
      break;

    default:
      return res.status(500).json({ msg: `Se me olvido validar esto` })
  }

  if (modelo.img) {
    const pathImage = path.join(__dirname, '../uploads/', coleccion, modelo.img)

    if (fs.existsSync(pathImage)) {
      return res.sendFile(pathImage)
    }
  }

  const pathNoImage = path.join(__dirname, '../assets/no-image.jpg')
  res.sendFile(pathNoImage)
}

const archivoProyectoYEnfoquesGet = async (req, res = response) => {
  try {
    const {
      q = '',
      page = 0,
      perPage = 10,
      sortBy = 'codigo',
      sortDesc = true
    } = req.query;

    const sort = {}
    const skip = parseInt(page) === 0 || parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * parseInt(perPage);
    const { proyectoId, enfoqueId } = req.params
    let query = { $and: [{ 'proyecto': proyectoId }, { 'enfoque': enfoqueId }] };
    sort[sortBy] = (sortDesc === "false") ? -1 : 1;
    const [total, Uploads] = await Promise.all([
      Upload.countDocuments(query),
      Upload.find(query)
        .skip(skip)
        .sort(sort)
        .limit(perPage)
    ])
    res.send({ total, Uploads, perPage: parseInt(perPage), page: parseInt(page) })
  } catch (error) {
    return res.status(500).json({
      msg: `Error del servidor al mostrar los perfiles ${error}`
    })
  }

}

const descargarArchivo = async (req, res = response) => {
  try {
    const { id } = req.params
    const file = await Upload.findById(id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });

    }
    const filePath = path.join(__dirname, '..', `/projects/${file.ruta}/${file.nombreBinario}`);
    res.set('Content-Disposition', `inline; filename="${file.nombreBinario}"`);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath)
    }
  } catch (error) {
    return res.status(500).json({
      msg: `Error del servidor al descargar el archivos ${error}`
    })
  }
}

const generarZip = async (req, res = response) => {
  try {
    const { code } = req.params
    console.log(code)
    const filePath = path.join(__dirname, '..', `/projects/${code}`);
    if (fs.existsSync(filePath)) {
      const dirList = fs.readdirSync(filePath)
      const filePathSave = path.join(__dirname, '..', `/projects/filezip/${code}.zip`);
      const output = fs.createWriteStream(filePathSave);
      const archive = archiver('zip', {
        zlib: { level: 9 } // set the compression level
      });
      archive.directory(filePath, false);
      archive.pipe(output);
      output.on('close', function () {
        if (fs.existsSync(filePathSave)) {
          return res.sendFile(filePathSave)
        }
      });
      archive.on('error', function (err) {
        return res.status(500).json({
           succes: false,
           error: err,
           msg: `Error al comprimir la carpeta ${code}`
        });
      });
      archive.finalize();
    } else {
      return res.status(201).json({
        succes: false,
        msg: `Error al comprimir la carpeta ${code}`
     });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      msg: `Error del servidor al descargar el archivos ${error}`
    })
  }
}

const deleteFileById = async (req, res = response) => {

  try {

    const { id } = req.params
    const file = await Upload.findById(id);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    const filePath = path.join(__dirname, `../projects/${file.ruta}/${file.nombreBinario}`);
    fs.unlinkSync(filePath)
    const archivo = await Upload.deleteOne({ _id: id })
    res.json(archivo)
  } catch (error) {
    return res.status(500).json({
      msg: `Error del servidor al descargar el archivos ${error}`
    })

  }

}

const verificarExisteCarpeta = async (req, res = response) => {

 try {
  const { name } = req.params
  const filePath = path.join(__dirname, '..', `/projects/${name}`);
  const carpeta =  await fs.existsSync(filePath)
  return res.status(200).json({
    succes: carpeta,
 });
 } catch (error) {
  return res.status(500).json({
    msg: `Error del servidor al buscar la carpeta ${error}`
  })
  
 }

}

module.exports = {
  cargarArchivo,
  actualizarImagen,
  actualizarImagenCloudinary,
  mostrarImagen,
  archivoProyectoYEnfoquesGet,
  descargarArchivo,
  deleteFileById,
  generarZip,
  verificarExisteCarpeta
}