const express = require('express');
const router = express.Router();
const pcModel = require('../models/pc');

/**
 * @swagger
 * components:
 *  schemas:
 *    pc:
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
 *        cateoria: pc
 *        precio: 50
 *        image: ../img/pc/gta 5.jpeg
 */

/**
 * @swagger
 * /api/pc:
 *  post:
 *    summary: Crear un producto en la categoria pc
 *    tags: [PC]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/pc'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */
//crear usuario
router.post('/pc', (req,res) => {
    const user = pcModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
/**
 * @swagger
 * /api/pc:
 *  get:
 *    summary: Listar todos los productos de la categoria pc
 *    tags: [PC]
 *    responses:
 *      200:
 *        description: Productos de la categoria pc listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/pc'
 *  
 */

//leer todos los usuarios
router.get('/pc', (req,res) => {
    pcModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})


/**
 * @swagger
 * /api/pc/{id}:
 *  get:
 *    summary:  Listar todos los productos de la categoria pc por id
 *    tags: [PC]
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
 *                $ref: '#components/schemas/pc'
 *      404:
 *        description: No existe el producto
 */
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
/**
 * @swagger
 * /api/pc/{id}:
 *  delete:
 *    summary: Eliminar producto por id
 *    tags: [PC]
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
router.delete('/pc/:id', (req,res) => {
    const {id} = req.params;
    pcModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;
