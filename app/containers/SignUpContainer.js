import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm.js';


export default class SignUpContainer extends Component {
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
   * Process the sign up form and persist the user to the backend.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault();

    const formData = JSON.stringify({
      email: this.state.user.email,
      password: this.state.user.password
    });

    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://real-rates.herokuapp.com/api/v1/sign_up');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        this.context.router.replace('/login');
      } else {
        // failure

        console.log(xhr.response);
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
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        user={this.state.user}
      />
    );
  }

}
SignUpContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
