'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

import KeyBoard from './components/KeyBoard'

domready(() => {
  ReactDOM.render(
    <KeyBoard />,
    document.querySelector('.app')
  )
})
