import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SignUpContainer from '../app/containers/SignUpContainer.js';
import SignUpForm from '../app/components/SignUpForm.js';

describe('<SignUpContainer />', () => {
  it('contains a <SignUpForm/> component', () => {
    const wrapper = shallow(<SignUpContainer />);
    expect(wrapper.find(SignUpForm)).to.have.length(1);
  });

  it('should have an initial user state', () => {
    const wrapper = shallow(<SignUpContainer />);
    expect(wrapper.state().user).to.eql({email: '', password: ''});
  });
});
