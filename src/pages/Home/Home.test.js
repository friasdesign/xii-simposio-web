import React from 'react'
import { mount, shallow } from 'enzyme'

import Home from './index'

it('should render without errors', () => {
  const wrapper = mount(<Home/>)
  expect(wrapper).toHaveLength(1)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Home/>)
  expect(wrapper).toMatchSnapshot()
})
