import React from 'react'
import BlackKey from './BlackKey'

module.exports = React.createClass({

  handleOnKeyDown: function (event) {
    event.preventDefault()
  },

  handleBlackKey: function () {
    var blackKey = {
      c: true,
      d: true,
      e: false,
      f: true,
      g: true,
      a: true,
      b: false
    }
    var keyProps = this.props.notes
    if (blackKey[keyProps]) {
      return <BlackKey />
    }
  },

  render: function () {

    const noteName = 'key ' + this.props.note

    console.log(this.props.note)
    return (
      <div className={noteName}>
        {this.handleBlackKey()}
        <div className="rectangle"></div>
      </div>
    )
  }
})
