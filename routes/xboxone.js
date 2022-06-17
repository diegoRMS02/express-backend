const express = require('express');
const router = express.Router();
const xboxoneModel = require('../models/xboxone');

//crear usuario
router.post('/xboxone', (req,res) => {
    const user = xboxoneModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/xboxone', (req,res) => {
    xboxoneModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/xboxone/:id', (req,res) => {
    const { id } = req.params;
    xboxoneModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/xboxone/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    xboxoneModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/xboxone/:id', (req,res) => {
    const {id} = req.params;
    xboxoneModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;