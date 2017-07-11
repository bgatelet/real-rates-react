import React, { Component } from 'react';
import CurrencyForm from '../components/CurrencyForm.js';
import ListItem from '../components/ListItem.js';

export default class CurrencyListContainer extends Component {
  render() {
    return (
      <div>
        <CurrencyForm setOptions={this.props.setOptions} onSubmit={this.props.addItem}/>
        <br />
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <ListItem
            onRemove={this.props.removeItem}
            items={this.props.currencies}
            rates={this.props.rates}
            number={this.props.number} />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}
CurrencyListContainer.PropTypes = {
  setOptions: React.PropTypes.func.isRequired,
  addItem: React.PropTypes.func.isRequired,
  removeItem: React.PropTypes.func.isRequired,
  number: React.PropTypes.string.isRequired,
  baseCurrency: React.PropTypes.string.isRequired,
  currencies: React.PropTypes.array.isRequired,
  rates: React.PropTypes.object.isRequired
};
