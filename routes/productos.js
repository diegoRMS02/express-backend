const express = require('express');
const router = express.Router();
const productosModel = require('../models/productos');

//crear usuario
router.post('/productos', (req,res) => {
    const user = productosModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/productos', (req,res) => {
    productosModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/productos/:id', (req,res) => {
    const { id } = req.params;
    productosModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/productos/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    productosModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/productos/:id', (req,res) => {
    const {id} = req.params;
    productosModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;
