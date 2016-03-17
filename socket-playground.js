// index.html
// <script src="/primus/primus.io.js"></script>

// app.js

// import React from 'react'
//
// module.exports = React.createClass({
//
//   componentDidMount: function () {
//     this.socket = Primus.connect('ws://localhost:8080')
//     this.socket.on('open', function () {
//       this.socket.send('message', { message: 'communist connected' })
//       this.socket.on('note', function (note) {
//         console.log('note', note)
//         this.playSound(note)
//       }.bind(this))
//     }.bind(this))
//   },
//
//   playSound: function (note) {
//     const audio = new Audio(`../../public/audio/${note}.wav`);
//     audio.play()
//   },
//
//   render: function () {
//     return (
//       <div>
//       </div>
//     )
//   }
// })

// note.js



// server.js
var Primus = require('primus.io')
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
