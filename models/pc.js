const mongoose = require("mongoose");

const pcModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    },
    precio: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("PC", pcModel);