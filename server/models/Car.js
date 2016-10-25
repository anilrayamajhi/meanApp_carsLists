var
  mongoose = require('mongoose'),
  carSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    description: String,
    image: String
  }, {timestamps: true})

var Car = mongoose.model('Car', carSchema)
module.exports = Car
