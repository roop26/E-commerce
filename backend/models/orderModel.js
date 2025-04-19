const {Schema, model} = require('../connection');
const orderSchmea = new Schema({
    username: {type: String},
    address: {type: String},
    totalAmount: {type: Number},
    orderItems: [
        {
            productId: {type: String},
            quantity: {type: Number},
            price: {type: Number}
        }
    ],
})

module.exports = model('order', orderSchmea);