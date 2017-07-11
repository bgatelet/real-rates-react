import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';

import RateForm from '../app/components/RateForm.js';

describe('<RateForm />', () => {
  it('should contain an input', () => {
    const addSpy = spy();
    const wrapper = shallow(<RateForm setOptions={addSpy} />);
    expect(wrapper.containsAllMatchingElements([
      <input />
    ])).to.equal(true);
  });
});
