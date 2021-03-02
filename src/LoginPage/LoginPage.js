import React, { Component } from 'react';

class LoginPage extends Component {
  render () {
    return (
      <div className="LoginPage">
        <header>
          <h1>PLANTVENTORY</h1>
        </header>
        <form>
          <fieldset>
            <legend>Log In</legend>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username'/><br/>
            <label htmlFor='password'>Password</label>
            <input name='password' id='password'/><br/>
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