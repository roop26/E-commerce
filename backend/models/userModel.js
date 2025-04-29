const {Schema, model} = require('../connection');
const userSchmea = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
    city: {type: String},
    postalCode: {type: String},
    country: {type: String}
})

module.exports = model('user', userSchmea);