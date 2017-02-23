/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PostDetail from './PostDetail'

test('PostDetail component should render as expected with title as props', () => {
  const component = shallow(<PostDetail title='Some title' />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
