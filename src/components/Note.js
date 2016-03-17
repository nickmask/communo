import React from 'react'
import BlackKey from './BlackKey'

module.exports = React.createClass({

  handleOnKeyDown: function (event) {
    event.preventDefault()
  },

  render: function () {
    var letters = {
      c: 'D',
      d: 'F',
      e: 'G',
      f: 'H',
      g: 'J',
      a: 'K',
      b: 'L',
    }
    var keyboardLetter = letters[this.props.note]
    console.log('Letter', keyboardLetter)
    const noteName = 'key ' + this.props.note
    return (
      <div className={noteName}>
        <BlackKey BlackNotes={this.props.note} />
        <div className="rectangle"><p>{keyboardLetter}</p></div>
      </div>
    )
  }
})
// {this.handleBlackKey()}
