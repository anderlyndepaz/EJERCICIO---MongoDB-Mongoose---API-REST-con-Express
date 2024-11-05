const mongoose = require('mongoose');

// Definir el esquema de productos, incluyendo la referencia a Providers
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
      },
    price: {
        type: Number,
        required: true
    },
    // Referencia a la colección Providers
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    }
    // Otros campos del producto...
});

// Crear el modelo de Product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
