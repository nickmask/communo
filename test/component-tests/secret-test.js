import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import KeyBoard from '../../src/components/KeyBoard'

describe('Key board', () => {
  const props = {
    notes: [
      'c',
      'd',
      'e',
      'f',
      'g',
      'a',
      'b'
    ]
  }
  const wrapper = shallow(<KeyBoard notes={props.notes}/>)

  it('should have class of key-board', () => {

    expect(wrapper.find('.key-board')).to.have.length(1)
  })
})
