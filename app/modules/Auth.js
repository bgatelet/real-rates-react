export default class Auth {

  /**
   * Authenticate a user and save the jwt token to Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated by checking if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user by emoving the jwt token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get the jwt token value.
   *
   * @returns {string}
   */
  static getToken() {
    return localStorage.getItem('token');
  }

}
