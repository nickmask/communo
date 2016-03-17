import React from 'react'
import Key from './Key'

export default React.createClass({

  render: function () {
    console.log('this', this.props.test)
    return (
      <div>
        <div className="key-board clearfix">
          {this.props.notes.map(function(notee) {
            return <Key note=notee />
          }
        )}
        </div>
      </div>
    )
  }
})
