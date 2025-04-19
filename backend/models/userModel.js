const {Schema, model} = require('../connection');
const userSchmea = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

module.exports = model('user', userSchmea);