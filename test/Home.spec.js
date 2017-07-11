import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Home from '../app/components/Home.js';
import RateContainer from '../app/containers/RateContainer.js';

describe('<Home />', () => {
  it('should contain an input', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <RateContainer />
    ])).to.equal(true);
  });
});
