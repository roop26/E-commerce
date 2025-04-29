const {Schema, model} = require('../connection');
const orderSchema = new Schema({
    username: {type: String, required: true},
    userId: {type: String, required: true},
    address: {type: String, required: true},
    totalAmount: {type: Number, required: true},
    orderItems: [
        {
            productId: {type: String, required: true},
            quantity: {type: Number, required: true},
            price: {type: Number, required: true}
        }
    ],
    status: {type: String, enum: ['pending', 'success', 'failed'], default: 'pending'},
    paymentMethod: {type: String, required: true},
    razorpay_order_id: {type: String},
    razorpay_payment_id: {type: String},
    razorpay_signature: {type: String},
    createdAt: {type: Date, default: Date.now}
});

module.exports = model('order', orderSchema);