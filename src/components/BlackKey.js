import React from 'react'

export default React.createClass({
  handleOnKeyDown: function (event) {
    event.preventDefault()
  },

  handleBlackKeyNote: function () {
    var blackNoteObj = {
      c: 'black-c',
      d: 'black-d',
      f: 'black-f',
      g: 'black-g',
      a: 'black-a',
    }
    return blackNoteObj[this.props.BlackNotes]
  },
  render() {
    return (
      <div
        className={this.handleBlackKeyNote}
        onKeyDown={this.handleOnKeyDown}
      >
      </div>
    )
  }
})
