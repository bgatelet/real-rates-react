import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';

import Item from '../app/components/Item.js';

describe('<Item />', () => {
  it('should have an initial realRate state', () => {
    const removeSpy = spy();
    const rates = { 'USD': '1.02' };
    const number = '100'
    const item = 'USD'
    const wrapper = shallow(<Item onRemove={removeSpy} rates={rates} number={number} item={item} />);
    expect(wrapper.state().realRate).to.equal('');
  });

  it('should contains an input', () => {
    const removeSpy = spy();
    const rates = { 'USD': '1.02' };
    const number = '100'
    const item = 'USD'
    const wrapper = shallow(<Item onRemove={removeSpy} rates={rates} number={number} item={item} />);
    expect(wrapper.containsAllMatchingElements([
      <input />
    ])).to.equal(true);
  });

  it('should call onRemove when button is clicked', () => {
    const removeSpy = spy();
    const rates = { 'USD': '1.02' };
    const number = '100'
    const item = 'USD'
    const wrapper = shallow(<Item onRemove={removeSpy} rates={rates} number={number} item={item} />);
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(removeSpy.calledOnce).to.equal(true);
  });
});
