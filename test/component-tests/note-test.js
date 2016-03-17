import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import Note from '../../src/components/Note'

describe('Note', () => {
  xit('should have two divs', () => {
    const wrapper = mount(<Note />)
    expect(wrapper.find('div')).to.equal(2)
  })
  xit('should have class of note', () => {
    const wrapper = shallow(<Note />)
    expect(wrapper.find('.note')).to.have.length(1)
  })
  xit('should allow us to change props', () => {
    const wrapper = mount(<Note note='c'/>)
    expect(wrapper.props().note).to.equal('c');
    wrapper.setProps({ note: 'd' })
    expect(wrapper.props().note).to.equal('d');
  })
  it('should render a black note on "c"', () => {
    const wrapper = mount(<Note notes='c'/>)
    expect(wrapper.find('div')).to.have.length(2)
  })
})
