import React, { Component } from 'react';

class LoginPage extends Component {
  render () {
    return (
      <div className="LoginPage">
        <form>
          <fieldset>
            <legend>Log In</legend>
            <label>Username</label>
            <input/>
            <label>Password</label>
            <input/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default LoginPage;