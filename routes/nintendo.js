const express = require('express');
const router = express.Router();
const nintendoModel = require('../models/nintendo');

//crear usuario
router.post('/nintendo', (req,res) => {
    const user = nintendoModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/nintendo', (req,res) => {
    nintendoModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/nintendo/:id', (req,res) => {
    const { id } = req.params;
    nintendoModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/nintendo/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    nintendoModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/nintendo/:id', (req,res) => {
    const {id} = req.params;
    nintendoModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;