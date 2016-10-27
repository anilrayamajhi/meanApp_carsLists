var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/cars.js'),
  ghpages = require('gh-pages'),
  path = require('path'),
  PORT = process.env.port || 3000

mongoose.connect('mongodb://localhost/factories-practice', function(err) {
  console.log(err || "Connected to MongoDB (factories-practice)")
})

ghpages.publish(path.join(__dirname, '/../client/index.html'), function(err) {
  if(err) console.log(err);
});

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static('client'))

app.use('/api', apiRoutes)

app.get('*', function(req, res) {
  res.sendFile('/client/index.html', {root: './'})
})

app.listen(PORT, function(err) {
  console.log(err || "Server running on port " + PORT)
})
