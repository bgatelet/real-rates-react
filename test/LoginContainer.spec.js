import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import LoginContainer from '../app/containers/LoginContainer.js';
import LoginForm from '../app/components/LoginForm.js';

describe('<LoginContainer />', () => {
  it('contains a <LoginForm/> component', () => {
    const wrapper = shallow(<LoginContainer />);
    expect(wrapper.find(LoginForm)).to.have.length(1);
  });

  it('should have an initial user state', () => {
    const wrapper = shallow(<LoginContainer />);
    expect(wrapper.state().user).to.eql({email: '', password: ''});
  });
});
