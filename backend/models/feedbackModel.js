const {Schema, model} = require('../connection');
const feedbackSchmea = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String},
    rating: {type: Number},
    image: {type: String},
})

module.exports = model('user', feedbackSchmea);