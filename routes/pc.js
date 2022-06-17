const express = require('express');
const router = express.Router();
const pcModel = require('../models/pc');

//crear usuario
router.post('/pc', (req,res) => {
    const user = pcModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/pc', (req,res) => {
    pcModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/pc/:id', (req,res) => {
    const { id } = req.params;
    pcModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/pc/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    pcModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/pc/:id', (req,res) => {
    const {id} = req.params;
    pcModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;
