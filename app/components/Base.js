import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth.js';

export default class Base extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand">Real Rates</IndexLink>
            </div>

            <div className="collapse navbar-collapse">
              {Auth.isUserAuthenticated() ? (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/logout">Log out</Link></li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/login">Log in</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        {this.props.children}

      </div>
    )
  }
}
Base.propTypes = {
  children: React.PropTypes.object.isRequired
};
