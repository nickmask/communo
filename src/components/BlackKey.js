import React from 'react'

export default React.createClass({
  handleOnKeyDown: function (event) {
    event.preventDefault()
  },

  render() {
    var blackNoteObj = {
      c: 'black-key black-c',
      d: 'black-key black-d',
      e: '',
      f: 'black-key black-f',
      g: 'black-key black-g',
      a: 'black-key black-a',
      b: '',
    }
    var letters = {
      c: 'R',
      d: 'T',
      f: 'U',
      g: 'I',
      a: 'O',
    }
    var blackNote = blackNoteObj[this.props.BlackNotes]
    var keyboardLetter = letters[this.props.BlackNotes]
    return (
      <div
        className={blackNote}
      >
      <p>{keyboardLetter}</p>
      </div>
    )
  }
})
