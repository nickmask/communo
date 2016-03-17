import React from 'react'
import KeyBoard from './KeyBoard'
import { convertKeyCode } from './utils'

var PORT = process.env.PORT

export default React.createClass({
  getInitialState: function() {
    return {
      notes: [
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'b'
      ],
      active: '',
    }
  },

  componentWillMount: function () {
    console.log('environment:', process.env)
    console.log('trying to connect primus on port ', PORT)

    if (process.env.NODE_ENV === 'production') {
      this.socket = Primus.connect(`ws://${PORT}`)
    } else {
      this.socket = Primus.connect('ws://localhost:8080')
    }

    this.socket.on('open', function () {
      this.socket.send('message', { message: 'communist connected' })
      this.socket.on('note', function (note) {
        this.playSound(note)
      }.bind(this))
    }.bind(this))
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
  },

  playSound: function (note) {
    const audio = new Audio(`./audio/${note.note}.wav`);
    audio.play()
  },

  handleKeyDown: function (event) {
    const note = convertKeyCode(event.keyCode)
    this.socket.send('note', { note: note})
    this.setState({active: note})
    console.log('Active state', this.state.active)
  },

  render: function () {
    return (
      <div>
        <h1 id="main-title">Communo</h1>
        <h2 id="subtitle">Piano for Communists</h2>
        <KeyBoard
          playSound={this.playSound}
          notes={this.state.notes}
          active={this.state.active}
        />
      </div>
    )
  }
})
