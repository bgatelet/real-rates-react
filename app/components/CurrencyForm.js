import React, { Component } from 'react';
import CountryData from 'country-data';

export default class CurrencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  setText(event) {
    this.setState({text: event.target.value});
  }
  handleClick() {
    if (this.state.text !== '') {
      this.props.onSubmit(this.state.text);
    }
  }
  render() {
    return (
      <div className="form-inline">
        <div className="input-group">
          <select name="currencies" className="form-control" onChange={this.setText}>
            <option value="">---</option>
            {this.props.setOptions()}
          </select>
        </div>
        <div className="input-group">
          <button className="btn btn-default" onClick={this.handleClick}>ADD</button>
        </div>
      </div>
    );
  }
}
CurrencyForm.PropTypes = {
  setOptions: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};
