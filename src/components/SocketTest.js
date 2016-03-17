import React from 'react'

export default React.createClass({

  componentDidMount: function () {
    console.log("trying to connect primus...")
    this.socket = Primus.connect('ws://localhost:8080')
    this.socket.on('open', function () {
      this.socket.send('message', { message: 'communist connected' })
      this.socket.on('note', function (note) {
        console.log('note', note)
        this.playSound(note)
      }.bind(this))
    }.bind(this))
  },

  playSound: function (note) {
    const audio = new Audio(`./audio/${note}.wav`);
    audio.play()
  },

  render () {
    return (
      <div>
        <button>socket test</button>
      </div>
    )
  }
})
