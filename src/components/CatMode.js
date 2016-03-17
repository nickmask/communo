import React from 'react'
import KeyBoard from './KeyBoard'
import { convertKeyCode } from './utils'

export default React.createClass({

  playSoundCatMode: function (note) {
    console.log('note', note)
    const audio = new Audio(`./audio/cat_audio/${note.note}.wav`);
    audio.play()
  },

  handleKeyDown: function (event) {
    const note = convertKeyCode(event.keyCode)
    this.socket.send('note', { note: note})
  },

  render: function () {
    return (
      <input type="button" value="Cat Mode" />
    )
  }
})



