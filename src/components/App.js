import React from 'react'
import KeyBoard from './KeyBoard'
import { convertKeyCode } from './utils'

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
      ]
    }
  },
  componentDidMount: function () {
      window.addEventListener('keydown', this.handleKeyDown)
  },

  handleKeyDown: function (event) {
    const note = convertKeyCode(event.keyCode)
    const audio = new Audio(`/audio/${note}.wav`)
    audio.play()
  },

  render: function () {
    return (
      <div>
        <h1 id="main-title">Communo</h1>
        <h2 id="subtitle">Piano for Communists</h2>
        <KeyBoard
          playSound={this.playSound}
          notes={this.state.notes}
          test="Test"
        />
      </div>
    )
  }
})
