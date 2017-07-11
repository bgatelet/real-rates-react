import React, { Component } from 'react';
import Item from '../components/Item.js';

export default class ListItem extends Component {
  render() {
    return this.props.items ?
      (<ul className="list-group">
        {this.props.items.map((item, index) => (
          <li className="list-group-item" key={index}>
            <Item
              onRemove={this.props.onRemove}
              item={item}
              rates={this.props.rates}
              number={this.props.number}
            />
          </li>
        ))}
      </ul>)
    : null;
  }
}
ListItem.propTypes = {
  onRemove: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired,
  rates: React.PropTypes.object.isRequired,
  number: React.PropTypes.string.isRequired
};
