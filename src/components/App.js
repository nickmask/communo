import React from 'react'
import KeyBoard from './KeyBoard'
import { convertKeyCode } from './utils'
import $ from 'jquery'

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
    if (process.env.NODE_ENV === 'production') {
      this.socket = Primus.connect('ws://communo.herokuapp.com/')
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
    window.cat = function () {
      this.setState({mode: 'cat'})
      $('body').addClass('cat')
      console.log('cat mode activated')
    }.bind(this)
    window.normal = function () {
      this.setState({mode: 'normal'})
      $('body').addClass('normal')
      console.log('normal mode activated')
    }.bind(this)
    window.gameofcat = function() {
      this.setState({mode: 'gameofcat'})
      $('body').addClass('gameofcat')
      console.log('gameofcat mode activated')
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
    } else if (this.state.mode === 'gameofcat') {
      let audio = new Audio(`./audio/game_of_cat/game_of_cat.wav`)
      audio.play()
    }
  },

  handleKeyDown: function (event) {
    const note = convertKeyCode(event.keyCode)
    this.socket.send('note', { note: note})
    this.setState({active: note})
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
