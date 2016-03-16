import React from 'react'
import BlackKey from 'BlackKey'

export default React.createClass({
  handleOnKeyDown(event) {
    event.preventDefault()
    console.log('keypress')
  },
  render() {
    return (
      <div className={this.props.key} onKeyDown={this.handleOnKeyDown}>
      </div>
    )
  }
})
