import React, { Component } from 'react';

export default class RateForm extends Component {
  render() {
    return (
      <div className="form-inline">
        <div className="input-group">
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={this.props.number}
            onChange={this.props.changeNumber}
          />
        </div>
        <div className="input-group">
          <select className="form-control" name="currencies" value={this.props.baseCurrency} onChange={this.props.changeBaseCurrency}>
            {this.props.setOptions()}
          </select>
        </div>
      </div>
    );
  }
}
RateForm.PropTypes = {
  setOptions: React.PropTypes.func.isRequired,
  changeBaseCurrency: React.PropTypes.func.isRequired,
  changeNumber: React.PropTypes.func.isRequired,
  baseCurrency: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired
};
