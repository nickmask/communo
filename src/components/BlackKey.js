import React from 'react'

export default React.createClass({
  handleOnKeyDown(event) {
    event.preventDefault()
    console.log('keypress')
  },
  render() {
    return (
      <div className={this.props.blackKey} onKeyDown={this.handleOnKeyDown}>
      </div>
    )
  }
})
 
