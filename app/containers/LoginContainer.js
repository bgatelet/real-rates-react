import React, { Component } from 'react';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.js';


export default class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {
        email: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the sign up form and set the jwt token if successfully logged in.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault();

    const formData = JSON.stringify({
                        auth:
                          {
                            email: this.state.user.email,
                            password: this.state.user.password
                          }
                      });

    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://real-rates.herokuapp.com/api/v1/sign_in');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 201) {
        // success

        // save the token
        Auth.authenticateUser(xhr.response.jwt);

        this.context.router.replace('/');
      } else {
        // failure
        console.log(xhr.response)
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        user={this.state.user}
      />
    );
  }

}
LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
