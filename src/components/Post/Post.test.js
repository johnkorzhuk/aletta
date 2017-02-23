/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

test('Post component should render as expected with title as props', () => {
  const component = shallow(<Post title='Some title' />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Post component should render as expected with titleLink as props', () => {
  const component = shallow(<Post titleLink />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
