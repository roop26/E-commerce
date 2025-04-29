const mongoose = require("mongoose")

const url = "mongodb+srv://roop123:roop123@cluster0.nregj.mongodb.net/e_commerce?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('Connected to Database');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;