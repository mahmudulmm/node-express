

var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/test")
    .then(() => console.log("conected"))
    .catch(err => console.error("failed"));