import React from 'react'
import Note from './Note'

export default React.createClass({

  render: function () {
    return (
      <div>
        <div className="key-board clearfix">
          {this.props.notes.map(function(note) {
            return <Note sendNote={this.props.sendNote} note={note} active={this.props.active}/>
          }.bind(this)
        )}
        </div>
      </div>
    )
  }
})
