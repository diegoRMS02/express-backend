const express = require('express');
const router = express.Router();
const xboxoneModel = require('../models/xboxone');

/**
 * @swagger
 * components:
 *  schemas:
 *    xboxone:
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
 *        cateoria: xboxone
 *        precio: 50
 *        image: ../img/pc/gta 5.jpeg
 */

/**
 * @swagger
 * /api/xboxone:
 *  post:
 *    summary: Crear un producto en la categoria xboxone
 *    tags: [XboxOne]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/xboxone'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */
//crear usuario
router.post('/xboxone', (req,res) => {
    const user = xboxoneModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
/**
 * @swagger
 * /api/xboxone:
 *  get:
 *    summary: Listar todos los productos de la categoria xboxone
 *    tags: [XboxOne]
 *    responses:
 *      200:
 *        description: Productos de la categoria xboxone listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/xboxone'
 *  
 */

//leer todos los usuarios
router.get('/xboxone', (req,res) => {
    xboxoneModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
/**
 * @swagger
 * /api/xboxone/{id}:
 *  get:
 *    summary:  Listar todos los productos de la categoria xboxone por id
 *    tags: [XboxOne]
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
 *                $ref: '#components/schemas/xboxone'
 *      404:
 *        description: No existe el producto
 */
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
/**
 * @swagger
 * /api/xboxone/{id}:
 *  delete:
 *    summary: Eliminar producto por id
 *    tags: [XboxOne]
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
router.delete('/xboxone/:id', (req,res) => {
    const {id} = req.params;
    xboxoneModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;