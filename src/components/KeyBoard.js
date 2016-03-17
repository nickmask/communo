import React from 'react'
import Note from './Note'

export default React.createClass({
  render: function () {
    console.log(this.props.active)
    return (
      <div>
        <div className="key-board clearfix">
          {this.props.notes.map(function(note) {
            return <Note note={note} active={this.props.active}/>
          }.bind(this)
        )}
        </div>
      </div>
    )
  }
})
