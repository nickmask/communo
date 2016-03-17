import React from 'react'

export default React.createClass({
  handleOnKeyDown(event) {
    event.preventDefault()
    console.log('keypress')
  },
  render() {
    return (
      <div>
      I'm a black key. yayyayaya
      </div>
    )
  }
})

// className={this.props.blackKey} onKeyDown={this.handleOnKeyDown}
