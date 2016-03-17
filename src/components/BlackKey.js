import React from 'react'

export default React.createClass({
  handleOnKeyDown: function (event) {
    event.preventDefault()
    this.props.playSound()
  },

  makeDivActiveAgain: function () {
    var blackLetters = {
      c: 'R',
      d: 'T',
      f: 'U',
      g: 'I',
      a: 'O',
    }
    if (this.props.active === blackLetters[this.props.BlackNotes]) {
      return 'active'
    }
    else {
      return ''
    }
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
    var blackLetters = {
      c: 'R',
      d: 'T',
      f: 'U',
      g: 'I',
      a: 'O',
    }

    var blackNote = blackNoteObj[this.props.BlackNotes] + ' ' + this.makeDivActiveAgain()
    var keyboardLetter = blackLetters[this.props.BlackNotes]
    return (
      <div
        className={blackNote}
      >
      <p>{keyboardLetter}</p>
      </div>
    )
  }
})
