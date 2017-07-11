import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';

import CurrencyForm from '../app/components/CurrencyForm.js';

describe('<CurrencyForm />', () => {
  it('should have an initial text state', () => {
    const addSpy = spy();
    const wrapper = shallow(<CurrencyForm setOptions={addSpy} />);
    expect(wrapper.state().text).to.equal('');
  });

  it('should contain a button', () => {
    const addSpy = spy();
    const wrapper = shallow(<CurrencyForm setOptions={addSpy} />);
    expect(wrapper.containsAllMatchingElements([
      <button>ADD</button>
    ])).to.equal(true);
  });

  it('should call onSubmit when ADD is clicked', () => {
    const addSpy = spy();
    const otherSpy = spy();
    const wrapper = shallow(<CurrencyForm onSubmit={addSpy} setOptions={otherSpy} />);
    wrapper.setState({text: 'EUR'});
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(addSpy.calledOnce).to.equal(true);
    expect(addSpy.calledWith('EUR')).to.equal(true);
  });
});
