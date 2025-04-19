const {Schema, model} = require('../connection');
const reviewSchmea = new Schema({
    userId: {type: String, required: true},
    rating: {type: String, required: true},
    discription: {type: String},
    createdAt: {type: Number},
    image: {type: String},
})

module.exports = model('review', reviewSchmea);