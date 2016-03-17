process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('express')
var path = require('path')
var http = require('http')
var bodyParser = require('body-parser')
var compression = require('compression')
var Primus = require('primus.io')

var PORT = process.env.PORT || 8080

var app = express()
app.use(compression())
var server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

var primus = new Primus(server, {
  port: PORT,
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
  sparks.forEach((sp, index) => {
    if (sp.id === spark.id) {
      sparks.splice(index, 1)
      console.log(spark.id, ' disconnected')
    }
  })
})

server.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
