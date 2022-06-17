const express = require('express');
const router = express.Router();
const xboxseriesModel = require('../models/xboxseries');

//crear usuario
router.post('/xboxseries', (req,res) => {
    const user = xboxseriesModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
//leer todos los usuarios
router.get('/xboxseries', (req,res) => {
    xboxseriesModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
router.get('/xboxseries/:id', (req,res) => {
    const { id } = req.params;
    xboxseriesModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
router.put('/xboxseries/:id', (req,res) => {
    const {id} = req.params;
    const {nombre,edad,correo} = req.body;
    xboxseriesModel.updateOne({_id : id},{$set:{nombre,edad,correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))

})
router.delete('/xboxseries/:id', (req,res) => {
    const {id} = req.params;
    xboxseriesModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;