const path = require('path')
const { response } = require('express');
const { model } = require('mongoose');
const { subirArchivo } = require('../helpers');
const { Usuario, Producto } = require('../models');
const { param } = require('../routes/auth');
const cloudinary = require('cloudinary').v2
const Upload = require('../models/upload')


cloudinary.config(process.env.CLOUDINARY_URL)

const cargarArchivo = async (req, res = response) => {
  try {
    const { ruta, nombre, proyecto, enfoque } = req.body

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

module.exports = {
  cargarArchivo,
  actualizarImagen,
  actualizarImagenCloudinary,
  mostrarImagen
}