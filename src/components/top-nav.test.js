import React from 'react'
import {shallow, mount} from 'enzyme'

import TopNav from './top-nav'

describe('<TopNav />', () => {
  it('Should render without crashing', () => {
    shallow(<TopNav />)
  })

})