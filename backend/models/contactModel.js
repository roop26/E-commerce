const {Schema, model} = require('../connection');
const contactSchmea = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
})

module.exports = model('contact', contactSchmea);