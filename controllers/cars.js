var
  Car = require('../models/Car.js')
  seeds = require('../seeds.js'),
  express = require('express'),
  app = express()

app.use(express.static('client'))

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  seed
}

function index(req, res) {
  Car.find({}, function(err, cars) {
    if(err) return console.log(err)
    res.json(cars)
  })
}

function show(req, res, next) {
  Car.findById(req.params.id, function(err, car) {
    if(err) {
      console.log('ERROR: ', err);
      // res.sendFile('/client/index.html', {root: './'})
      }
    res.json(car)
  })
}

function create(req, res) {
  Car.create(req.body, function(err, car) {
    if(err) return console.log(err)
    res.json({success: true, message: "Car created! 🚗", car: car})
  })
}

function update(req, res) {
  Car.findByIdAndUpdate(req.params.id, req.body, {new: true},function(err, car) {
    if(err) return console.log(err)
    res.json({success: true, message: "Car updated! 🚙", car: car})
  })
}

function destroy(req, res) {
  Car.findByIdAndRemove(req.params.id, function(err) {
    if(err) return console.log(err)
    res.json({success: true, message: "Car deleted 😪"})
  })
}

function seed(req, res) {
  Car.remove({}, function(err) {
    if(err) return console.log(err)
    Car.insertMany(seeds, function(err, cars) {
      if(err) return console.log(err)
      res.json({success: true, message: "Cars created! 🚗 🚗 🚗 🚗 🚗 🚗 🚗", cars: cars})
    })
  })
}
