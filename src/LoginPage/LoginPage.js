import React, { Component } from 'react';

class LoginPage extends Component {
  render () {
    return (
      <div className="LoginPage">
        <form>
          <fieldset>
            <legend>Log In</legend>
            <label>Username</label>
            <input/><br/>
            <label>Password</label>
            <input/><br/>
            <button>
              SUBMIT
            </button>
            <p>
              user: demo
            </p>
            <p>
              password: demo
            </p>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default LoginPage;