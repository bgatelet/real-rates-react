import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import CurrencyListContainer from '../app/containers/CurrencyListContainer.js';
import CurrencyForm from '../app/components/CurrencyForm.js';
import ListItem from '../app/components/ListItem.js';

describe('<CurrencyListContainer />', () => {
  it('contains a <CurrencyForm/> component', () => {
    const wrapper = shallow(<CurrencyListContainer />);
    expect(wrapper.find(CurrencyForm)).to.have.length(1);
  });

  it('contains a <ListItem/> component', () => {
    const wrapper = shallow(<CurrencyListContainer />);
    expect(wrapper.find(ListItem)).to.have.length(1);
  });
});
