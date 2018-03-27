import React from 'react'
import {shallow, mount} from 'enzyme'

import Game from './game'

describe('<Game />', () => {
  
  it('Should render without crashing', () => {
    shallow(<Game />)
  });

  it('Should complain when NaN value entered.', () => {
    const wrapper = mount(<Game />)
    wrapper.instance().makeGuess("Hi!")
    expect(wrapper.state('feedback')).not.toEqual('Please enter a valid number.');
  });

  it('Should increment guesses array each time user guesses.', () => {
    const wrapper = mount(<Game />)
    wrapper.instance().makeGuess(10)
    expect(wrapper.state('feedback')).not.toEqual('Make your guess!');
    expect(wrapper.state('guesses').length).toEqual(1);
  });

  it('Should yield the right feedback as user gets closer to correct answer.', () => {
    const testCases = {
      50: 'You\'re Ice Cold...',
      30: 'You\'re Cold...',
      10: 'You\'re Warm.',
      1: 'You\'re Hot!',
      0: 'You got it!',
    }
    const wrapper = mount(<Game />)
    const correct = parseInt(wrapper.state('correctAnswer'))
    let guesses = 0
    for (let diff in testCases) {
      wrapper.instance().makeGuess((correct + parseInt(diff)))
      guesses++
      expect(wrapper.state('feedback')).toEqual(testCases[diff]);
      expect(wrapper.state('guesses').length).toEqual(guesses);
      }
  });

})