const express = require('express');
const router = express.Router();
const playStationModel = require('../models/playStation');
/**
 * @swagger
 * components:
 *  schemas:
 *    playStation:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: Nombre del usuario
 *        categoria:
 *          type: String
 *          description: Categoria del producto
 *        precio:
 *          type: integer
 *          description: Precio del producto
 *        image:
 *          type: integer
 *          description: Imagen del producto
 *      required:
 *        - nombre
 *        - precio
 *        - image
 *      example:
 *        nombre: Gta 5
 *        cateoria: plasyStation
 *        precio: 50
 *        image: ../img/pc/gta 5.jpeg
 */

/**
 * @swagger
 * /api/playStation:
 *  post:
 *    summary: Crear un producto en la categoria playtation
 *    tags: [PlayStation]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/playStation'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */
//crear usuario
router.post('/playStation', (req,res) => {
    const user = playStationModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
/**
 * @swagger
 * /api/playStation:
 *  get:
 *    summary: Listar todos los productos de la categoria playstation
 *    tags: [PlayStation]
 *    responses:
 *      200:
 *        description: Productos de la categoria playstation listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/playStation'
 *  
 */

//leer todos los usuarios
router.get('/playStation', (req,res) => {
    playStationModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
/**
 * @swagger
 * /api/playStation/{id}:
 *  get:
 *    summary:  Listar todos los productos de la categoria playStation por id
 *    tags: [PlayStation]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del producto a buscar
 *    responses:
 *      200:
 *        description: producto encontrado
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/playStation'
 *      404:
 *        description: No existe el producto
 */
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
/**
 * @swagger
 * /api/playStation/{id}:
 *  delete:
 *    summary: Eliminar producto por id
 *    tags: [PlayStation]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del producto a eliminar
 *    responses:
 *      200:
 *        description: producto eliminado
 *      404:
 *        description: No existe el producto
 */
router.delete('/playStation/:id', (req,res) => {
    const {id} = req.params;
    playStationModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;