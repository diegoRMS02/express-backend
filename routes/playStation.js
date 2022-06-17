const express = require('express');
const router = express.Router();
const playStationModel = require('../models/playStation');

//crear usuario
router.post('/playStation', (req,res) => {
    const user = playStationModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/playStation', (req,res) => {
    playStationModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/playStation/:id', (req,res) => {
    const { id } = req.params;
    playStationModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/playStation/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    playStationModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/playStation/:id', (req,res) => {
    const {id} = req.params;
    playStationModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;