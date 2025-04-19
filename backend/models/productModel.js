const { Schema, model } = require('../connection');
const productSchmea = new Schema({
    brandName: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    details: { type: String, required: true },
    rating: { type: Number, },
    image: { type: String },
    delivery: { type: String, },
})

module.exports = model('product', productSchmea);