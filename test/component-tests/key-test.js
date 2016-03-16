import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import Key from '../../src/components/Key'

describe('Key', () => {
  it('should have two divs', () => {
    const wrapper = mount(<Key />)
    expect(wrapper.find('div')).to.equal(2)
  })
  it('should have class of key', () => {
    const wrapper = shallow(<Key />)
    expect(wrapper.find('.key')).to.have.length(1)
  })
  it('should allow us to change props', () => {
    const wrapper = mount(<Key key='c'/>)
    expect(wrapper.props().key).to.equal('c');
    wrapper.setProps({ key: 'd' })
    expect(wrapper.props().key).to.equal('d');
  })
})
