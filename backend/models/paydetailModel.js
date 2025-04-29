const { model, Schema, Types } = require('../connection');

const paydetailSchema = new Schema({
    orderId: { type: Types.ObjectId, ref: 'order' },
    paymentMethod: { type: String },
    paymentStatus: { type: String },
    amountPaid: { type: Number },
    transactionId: { type: String },
    createdAt: { type: Date, default: Date.now() }
});


module.exports = model('paydetail', paydetailSchema);