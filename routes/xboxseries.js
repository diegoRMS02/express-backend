const express = require('express');
const router = express.Router();
const xboxseriesModel = require('../models/xboxseries');

/**
 * @swagger
 * components:
 *  schemas:
 *    xboxseries:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: Nombre del producto
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
 *        cateoria: xboxseries
 *        precio: 50
 *        image: ../img/pc/gta 5.jpeg
 */

/**
 * @swagger
 * /api/xboxseries:
 *  post:
 *    summary: Crear un producto en la categoria xboxseries
 *    tags: [XboxSeries]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/xboxseries'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */
//crear usuario
router.post('/xboxseries', (req,res) => {
    const user = xboxseriesModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
/**
 * @swagger
 * /api/xboxseries:
 *  get:
 *    summary: Listar todos los productos de la categoria xboxseries
 *    tags: [XboxSeries]
 *    responses:
 *      200:
 *        description: Productos de la categoria xboxseries listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/xboxseries'
 *  
 */

//leer todos los usuarios
router.get('/xboxseries', (req,res) => {
    xboxseriesModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})

/**
 * @swagger
 * /api/xboxseries/{id}:
 *  get:
 *    summary:  Listar todos los productos de la categoria xboxseries por id
 *    tags: [XboxSeries]
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
 *                $ref: '#components/schemas/xboxseries'
 *      404:
 *        description: No existe el producto
 */
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
/**
 * @swagger
 * /api/xboxseries/{id}:
 *  delete:
 *    summary: Eliminar producto por id
 *    tags: [XboxSeries]
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
router.delete('/xboxseries/:id', (req,res) => {
    const {id} = req.params;
    xboxseriesModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;