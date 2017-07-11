import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ListItem from '../app/components/ListItem.js';
import Item from '../app/components/Item.js';

describe('<ListItem />', () => {
  it('should contain an item', () => {
    const items = ['USD'];
    const wrapper = shallow(<ListItem items={items} />);
    expect(wrapper.containsAllMatchingElements([
      <Item />
    ])).to.equal(true);
  });
});
