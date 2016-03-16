'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

import App from './components/App'

domready(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.app')
  )
})
