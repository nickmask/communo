import React from 'react'
import KeyBoard from './KeyBoard'
import { convertKeyCode } from './utils'

var PORT = process.env.PORT || 8080

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
      mode: 'normal'
    }
  },

  componentWillMount: function () {
    console.log("trying to connect primus on port ", PORT)

    if (PORT === 8080) {
      this.socket = Primus.connect('ws://localhost:8080')
    } else {
      this.socket = Primus.connect(`ws://${PORT}`)
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
    window.cat = function () {
      this.setState({mode: 'cat'})
      console.log('cat mode activated')
    }.bind(this)
    window.normal = function () {
      this.setState({mode: 'normal'})
      console.log('normal mode activated')
    }.bind(this)
  },

  playSound: function (note) {
    console.log('note', note)
    if (this.state.mode === 'normal') {
      let audio = new Audio(`./audio/${note.note}.wav`);
      audio.play()
    } else if (this.state.mode === 'cat') {
      let audio = new Audio(`./audio/cat_audio/${note.note}.wav`)
      audio.play()
    }
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


