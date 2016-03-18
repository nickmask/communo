import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import KeyBoard from '../../src/components/KeyBoard'

describe('Keyboard', () => {
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
  const wrapper = mount(<KeyBoard notes={props.notes}/>)
  it('should have class of key-board', () => {
    expect(wrapper.find('.key-board')).to.have.length(1)
  })

  it("should have 23 'note' divs", () => {
    expect(wrapper.find('div')).to.have.length(23)
  })
})
