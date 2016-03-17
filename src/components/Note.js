import React from 'react'
import BlackKey from './BlackKey'

module.exports = React.createClass({
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
    const noteName = 'key ' + this.props.note
    return (
      <div className={noteName}>
        <BlackKey BlackNotes={this.props.note} active={this.props.active}/>
        <div className="rectangle">
          <p>{keyboardLetter}</p>
        </div>
      </div>
    )
  }
})
// {this.handleBlackKey()}
