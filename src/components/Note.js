import React from 'react'
import BlackKey from './BlackKey'

module.exports = React.createClass({

  makeDivActive: function () {
    var letters = {
      c: 'D',
      d: 'F',
      e: 'G',
      f: 'H',
      g: 'J',
      a: 'K',
      b: 'L',
    }
    if (this.props.active === letters[this.props.note]) {
      return 'active'
    }
    else {
      return ''
    }
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
    var activeKey = 'rectangle ' + this.makeDivActive()
    var keyboardLetter = letters[this.props.note]
    const noteName = 'key ' + this.props.note
    return (
      <div className={noteName}>
        <BlackKey
        BlackNotes={this.props.note}
        active={this.props.active}
        />
        <div className={activeKey}>
          <p>{keyboardLetter}</p>
        </div>
      </div>
    )
  }
})
// {this.handleBlackKey()}
