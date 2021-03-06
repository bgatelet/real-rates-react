import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class SignUpForm extends React.Component {
  render() {
    return (
      <Card className="container text-center">
        <form action="/" onSubmit={this.props.onSubmit}>
          <h2 className="card-heading">Sign Up</h2>
          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Create New Account" primary />
          </div>

          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
      </Card>
    )
  }
}
SignUpForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired
};
