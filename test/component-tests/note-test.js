import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import Note from '../../src/components/Note'

describe('Note', () => {
  it('should have three divs', () => {
    const wrapper = mount(<Note />)
    expect(wrapper.find('div')).to.have.length(3)
  })
  it('should have props of d', () => {
    const wrapper = mount(<Note note='d' />)
    expect(wrapper.props().note).to.equal('d')
  })
  it('should allow us to change props', () => {
    const wrapper = mount(<Note note='c'/>)
    expect(wrapper.props().note).to.equal('c');
    wrapper.setProps({ note: 'd' })
    expect(wrapper.props().note).to.equal('d');
  })
  it('should render a black note on "c"', () => {
    const wrapper = mount(<Note notes='c'/>)
    expect(wrapper.find('div')).to.have.length(3)
  })
})
