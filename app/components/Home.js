import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RateContainer from '../containers/RateContainer.js';

export default class Home extends Component {
  render() {
    return (
      <Card className="container">
        <CardTitle title="Real Rates" subtitle="Compare the actual trade value to the one given by the money exchange and see how much you'll be gaining or (most likely) losing." />
        <div className="container text-center">
          <RateContainer />
        </div>
      </Card>
    )
  }
}
