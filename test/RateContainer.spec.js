import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RateContainer from '../app/containers/RateContainer.js';
import CurrencyListContainer from '../app/containers/CurrencyListContainer.js';
import RateForm from '../app/components/RateForm.js';

describe('<RateContainer />', () => {
  it('contains a <RateForm/> component', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.find(RateForm)).to.have.length(1);
  });

  it('contains a <CurrencyListContainer/> component', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.find(CurrencyListContainer)).to.have.length(1);
  });

  it('should have an initial userListID state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().userListID).to.equal('');
  });

  it('should have an initial availableCurrencies state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().availableCurrencies).to.eql(["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"]);
  });

  it('should have an initial baseCurrency state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().baseCurrency).to.equal('USD');
  });

  it('should have an initial number state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().number).to.equal('1.00');
  });

  it('should have an initial currencies state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().currencies).to.eql([]);
  });

  it('should have an initial rates state', () => {
    const wrapper = shallow(<RateContainer />);
    expect(wrapper.state().rates).to.be.empty;
  });
});
