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
    return (
      <div className={this.props.notes} >
        {this.handleBlackKey()}
      </div>
    )
  }
})
