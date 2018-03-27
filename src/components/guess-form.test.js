import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  
  it('Should render without crashing', () => {
    shallow(<GuessForm />)
  })

   it('Should call makeGuess when form is submitted with valid input.', () => {
    const callback = jest.fn();
    const testValue = "10";
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>)
    wrapper.find('input[type="number"]').instance().value = testValue
    wrapper.simulate('submit')
    expect(callback).toHaveBeenCalledWith(testValue);
  })

})