import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realRate: ''
    };
    this.changeRealRate = this.changeRealRate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  changeRealRate(event) {
    if (event.target.value !== '') {
      this.setState({
        realRate: event.target.value
      });
    }
  }
  handleRemove(currency) {
    console.log(currency);
    this.props.onRemove(currency);
  }
  render() {
    const valueInCurrency = Math.round(this.props.rates[this.props.item] * this.props.number * 100) / 100;
    const gainLoss = Math.round(((this.state.realRate * this.props.number) - valueInCurrency) * 100) / 100;
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleRemove.bind(null, this.props.item)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button> {valueInCurrency} {this.props.item}
        { " " }
        <span className="glyphicon glyphicon-minus"></span>
        <span className="glyphicon glyphicon-minus"></span>
        <span className="glyphicon glyphicon-minus"></span>
        { " " } Rate Given: { " " }
        <input
          type="number"
          step="0.01"
          value={this.state.realRate}
          onChange={this.changeRealRate}
        />
        { this.state.realRate !== '' &&
          <span> Gain/Loss: {gainLoss} {this.props.item}</span>
        }
      </div>
    )
  }
}
Item.propTypes = {
  onRemove: React.PropTypes.func.isRequired,
  item: React.PropTypes.string.isRequired,
  rates: React.PropTypes.object.isRequired,
  number: React.PropTypes.string.isRequired
};
