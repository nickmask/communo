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
      mode: 'normal',
      communists: 0
    }
  },

  componentWillMount: function () {
    var host = location.origin.replace(/^http/, 'ws')
    host = host.replace(/^https/, 'ws')
    if (process.env.NODE_ENV === 'production') {
      this.socket = Primus.connect(host)
    } else {
      this.socket = Primus.connect(host)
    }

    this.socket.on('open', function () {
      this.socket.send('message', { message: 'communist connected' })

      this.socket.on('update', function (update) {
        this.updateCommunists(update)
      }.bind(this))

      this.socket.on('note', function (note) {
        this.playSound(note)
      }.bind(this))
    }.bind(this))
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
    window.cat = function () {
      this.setState({mode: 'cat'})
      $('body').removeClass()
      $('body').addClass('cat')
      console.log('cat mode activated')
    }.bind(this)
    window.normal = function () {
      this.setState({mode: 'normal'})
      $('body').removeClass()
      $('body').addClass('normal')
      console.log('normal mode activated')
    }.bind(this)
    window.gameofcat = function() {
      this.setState({mode: 'gameofcat'})
      $('body').removeClass()
      $('body').addClass('gameofcat')
      console.log('gameofcat mode activated')
    }.bind(this)
    window.trump = function() {
      this.setState({mode: 'trump'})
      $('body').removeClass()
      $('body').addClass('trump')
      console.log('trump mode activated')
    }.bind(this)
  },

  playSound: function (note) {
    if (this.state.mode === 'normal') {
      let audio = new Audio(`./audio/${note.note}.wav`);
      audio.play()
    } else if (this.state.mode === 'cat') {
      let audio = new Audio(`./audio/cat_audio/${note.note}.wav`)
      audio.play()
    } else if (this.state.mode === 'gameofcat') {
      let audio = new Audio(`./audio/game_of_cat/${note.note}.wav`)
      audio.play()
    } else if (this.state.mode === 'trump') {
      let audio = new Audio(`./audio/trump/${note.note}.wav`)
      audio.play()
    }
  },

  updateCommunists: function (communistCount) {
    this.setState({communists: communistCount})
  },

  handleKeyDown: function (event) {
    const note = convertKeyCode(event.keyCode)
    this.socket.send('note', { note: note})
    this.setState({active: note})
  },

  sendNote: function (note) {
    this.socket.send('note', { note: note})
    this.setState({active: note})
  },

  render: function () {
    return (
      <div>
        <div id="opaque-square">
          <h1 id="main-title">Communo</h1>
          <h2 id="subtitle">Communists collaborating: {this.state.communists}</h2>
        </div>
        <KeyBoard
          sendNote={this.sendNote}
          playSound={this.handleKeyDown}
          notes={this.state.notes}
          active={this.state.active}
        />
      </div>
    )
  }
})
