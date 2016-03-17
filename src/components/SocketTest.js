'use strict'
import React from 'react'

export default React.createClass({

  componentWillMount: function () {
    console.log("trying to connect primus...")
    this.socket = Primus.connect('ws://localhost:8080')
    this.socket.on('open', function () {
      this.socket.send('message', { message: 'communist connected' })
      this.socket.on('note', function (note) {
        this.playSound(note)
      }.bind(this))
    }.bind(this))
  },

  playSound: function (note) {
    console.log('note', note)
    const audio = new Audio(`./audio/${note.note}.wav`);
    audio.play()
  },

  sendMessage: function (message) {
    console.log('firing')
    this.socket.send('note', { note: 'D'})
  },

  render: function () {
    return (
      <div>
        <button type='button' onClick={() => this.sendMessage('hello sharon')}>socket test</button>
      </div>
    )
  }
})
