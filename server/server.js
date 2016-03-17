var express = require('express')
var path = require('path')
var compression = require('compression')
var Primus = require('primus.io')

var app = express()
app.use(compression())

var primus = new Primus(server, {
  port: '8080',
  origins: '*',
  transformer: 'websockets',
  parser: 'JSON'
})

var sparks = []
primus.on('connection', spark => {
  sparks.push(spark)
  console.log('communist connection established')

  spark.on('message', msg => {
    console.log(msg)
  })

  spark.on('note', note => {
    sparks.forEach(sp => {
      sp.send('note', note)
    })
  })
})

primus.on('disconnection', function (spark) {
  console.log(spark, ' disconnected')
})

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
