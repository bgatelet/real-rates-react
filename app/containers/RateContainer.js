import React, { Component } from 'react';
import CountryData from 'country-data';
import RateForm from '../components/RateForm.js';
import CurrencyListContainer from '../containers/CurrencyListContainer.js';
import Auth from '../modules/Auth.js';

export default class RateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userListID: '',
      availableCurrencies: ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"],
      baseCurrency: 'USD',
      number: '1.00',
      currencies: [],
      rates: {}
    };
    this.onChangeBaseCurrency = this.onChangeBaseCurrency.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSetOptions = this.onSetOptions.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.loadRates = this.loadRates.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
    this.persistBaseCurrency = this.persistBaseCurrency.bind(this);
    this.persistCurrency = this.persistCurrency.bind(this);
    this.persistRemoval = this.persistRemoval.bind(this);
  }
  componentWillMount() {
    if (Auth.isUserAuthenticated()) {
      this.loadUserData();
    }
    this.loadRates();
  }

  /**
   * Change the base currency and persist it to the database if the user is authenticated.
   *
   * @param {object} event - the JavaScript event object
   */
  onChangeBaseCurrency(event) {
    this.setState({
      baseCurrency: event.target.value
    }, () => {
      this.loadRates();
      if (Auth.isUserAuthenticated()) {
        this.persistBaseCurrency();
      }
    });
  }
  /**
   * Change the amount of money to convert.
   *
   * @param {object} event - the JavaScript event object
   */
  onChangeNumber(event) {
    this.setState({
      number: event.target.value
    });
  }
  /**
   * Map each currency as an option for a select dropdown.
   *
   * @returns {array}
   */
  onSetOptions() {
    const formOptions = this.state.availableCurrencies.map((currency) => {
      return <option value={currency} key={currency}>{currency} - {CountryData.lookup.currencies({code: currency})[0].name}</option>;
    });
    return formOptions;
  }
  /**
   * Add a currency to the list and persist it to the backend if the user is authenticated.
   *
   * @param {string} currency
   */
  onAddItem(currency) {
    if (!this.state.currencies.includes(currency)) {
      this.setState({
        currencies: [].concat(this.state.currencies).concat([currency])
      }, () => {
        if (Auth.isUserAuthenticated()) {
          this.persistCurrency(currency);
        }
      });
    }
  }
  /**
   * Remove currency from the list and persist it to the backend if the user is authenticated.
   *
   * @param {string} currency
   */
  onRemoveItem(currency) {
    this.setState(previousState => ({ currencies: previousState.currencies.filter(currencyFromArray => currencyFromArray !== currency) }), () => {
      if (Auth.isUserAuthenticated()) {
        this.persistRemoval(currency);
      }
    });
  }

  /**
   * Load the rates for all the currencies against the base currency.
   *
   */
  loadRates() {
    const url = `https://api.fixer.io/latest?base=${this.state.baseCurrency}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        this.setState({
          rates: xhr.response.rates
        });
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send();
  }
  /**
   * Get the user's list, base currency, and currently chosen currencies.
   *
   */
  loadUserData() {
    const url = 'https://real-rates.herokuapp.com/api/v1/users';

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        const selectedCurrencies = xhr.response.list.currencies.map((currency) => {
          return currency.code;
        });
        this.setState({
          userListID: xhr.response.list.id,
          baseCurrency: xhr.response.list.base_currency,
          currencies: selectedCurrencies
        });
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send();
  }

  /**
   * Persist the base currency to the user's list on the database.
   *
   */
  persistBaseCurrency() {
    const url = 'https://real-rates.herokuapp.com/api/v1/users';

    const formData = JSON.stringify({
                        list_attributes: {
                          id: this.state.userListID,
                          base_currency: this.state.baseCurrency
                        }
                      });

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('put', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        console.log("success");
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send(formData);
  }
  /**
   * Persist the currency and add it to the user's list on the database.
   *
   * @param {string} currency
   */
  persistCurrency(currency) {
    const url = 'https://real-rates.herokuapp.com/api/v1/currencies';

    const formData = JSON.stringify({ code: currency });

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        console.log("success");
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send(formData);
  }
  /**
   * Persist the remove of a currency from the user's list on the database.
   *
   * @param {string} currency
   */
  persistRemoval(currency) {
    const url = 'https://real-rates.herokuapp.com/api/v1/list_currency/destroy';

    const formData = JSON.stringify({
                        list_id: this.state.userListID,
                        code: currency
                      });

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('delete', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        // success
        console.log("success");
      } else {
        // failure
        console.log(xhr.response);
      }
    });
    xhr.send(formData);
  }

  render() {
    return (
      <div>
        <RateForm
          setOptions={this.onSetOptions}
          changeBaseCurrency={this.onChangeBaseCurrency}
          changeNumber={this.onChangeNumber}
          availableCurrencies={this.state.availableCurrencies}
          baseCurrency={this.state.baseCurrency}
          number={this.state.number}
        />
      <hr />
        <CurrencyListContainer
          setOptions={this.onSetOptions}
          addItem={this.onAddItem}
          removeItem={this.onRemoveItem}
          availableCurrencies={this.state.availableCurrencies}
          baseCurrency={this.state.baseCurrency}
          number={this.state.number}
          currencies={this.state.currencies}
          rates={this.state.rates}
        />
      </div>
    );
  }
}
