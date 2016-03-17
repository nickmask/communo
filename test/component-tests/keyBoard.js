import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import KeyBoard from '../../src/components/KeyBoard'

describe('Key board', () => {
  it('should have class of key-board', () => {
    const wrapper = shallow(<KeyBoard />)
    expect(wrapper.find('.key-board')).to.have.length(1)
  })
})
