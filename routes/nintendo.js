const express = require('express');
const router = express.Router();
const nintendoModel = require('../models/nintendo');

/**
 * @swagger
 * components:
 *  schemas:
 *    nintendo:
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
 *        cateoria: nintendo
 *        precio: 50
 *        image: ../img/pc/gta 5.jpeg
 */

/**
 * @swagger
 * /api/nintendo:
 *  post:
 *    summary: Crear un producto en la categoria nintendo
 *    tags: [Nintendo]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/nintendo'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */
//crear usuario
router.post('/nintendo', (req,res) => {
    const user = nintendoModel(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
});
/**
 * @swagger
 * /api/nintendo:
 *  get:
 *    summary: Listar todos los productos de la categoria nintendo
 *    tags: [Nintendo]
 *    responses:
 *      200:
 *        description: Productos de la categoria nintendo listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/nintendo'
 *  
 */

//leer todos los usuarios
router.get('/nintendo', (req,res) => {
    nintendoModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json (error))
})
/**
 * @swagger
 * /api/nintendo/{id}:
 *  get:
 *    summary:  Listar todos los productos de la categoria nintendo por id
 *    tags: [Nintendo]
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
/**
 * @swagger
 * /api/nintendo/{id}:
 *  delete:
 *    summary: Eliminar producto por id
 *    tags: [Nintendo]
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
router.delete('/nintendo/:id', (req,res) => {
    const {id} = req.params;
    nintendoModel.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json (error))
})
module.exports = router;