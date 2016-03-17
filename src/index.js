'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

import App from './components/App'
import SocketTest from './components/SocketTest'

domready(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.app')
  )
})

// domready(() => {
//   ReactDOM.render(
//     <SocketTest />,
//     document.querySelector('.app')
//   )
// })
