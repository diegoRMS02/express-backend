const express = require("express");
const mongoose = require("mongoose");
const usuarios = require("../routes/usuarios");
const pc = require("../routes/pc");
const nintendo = require("../routes/nintendo");
const playStation = require("../routes/playStation");
const xboxone = require("../routes/xboxone");
const xboxseries = require("../routes/xboxseries");
const productos = require("../routes/productos");

require("dotenv").config();
const path = require("path");

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpecs = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentación ExpressGame",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:9000"
      }
    ]
  },
  apis: [ ` ${path.join(__dirname, "../routes/*.js")} ` ]
}
//variables
const app = express();
const port = 9000;

//config
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  })
app.use('/api', usuarios);
app.use('/api', pc);
app.use('/api', productos);
app.use('/api', nintendo);
app.use('/api', playStation);
app.use('/api', xboxone);
app.use('/api', xboxseries);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpecs)));



//rutas
app.get('/', function(req, res) {
    res.send("bienvenido al API REST");
})
//test mongdb
mongoose.connect(process.env.MONGODB_)
    .then(() => console.log('test mongdb connect'))
    .catch((error) => console.log(error))
//server
app.listen(9000, () => console.log('listening on port',port));