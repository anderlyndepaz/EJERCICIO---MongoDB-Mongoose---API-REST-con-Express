const mongoose = require('mongoose');
require('../config/db_mongo'); // Conexión a BBDD MongoDB

// Definir el esquema para Providers
const providerSchema = new mongoose.Schema({
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true,
        validate: {
            validator: function(url) {
                return url.startsWith('http');
            },
            message: "Porfa, introduce una URL válida"
        }
    }
});

// Crear el modelo de Provider
const Provider = mongoose.model('Providers', providerSchema);

module.exports = Provider;
