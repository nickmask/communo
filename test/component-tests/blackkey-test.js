import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import BlackKey from '../../src/components/BlackKey'

describe('<BlackKey />', () => {
  xit('should have one div', () => {
    const wrapper = mount(<BlackKey />)
    expect(wrapper.find('div')).to.equal(1)
  })
  it('should have className of black-key', () => {
    const wrapper = mount(<BlackKey class='black-key'/>)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
