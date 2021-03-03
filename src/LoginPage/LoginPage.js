import React, { Component } from 'react';
// import { Link } from 'react-router-dom;'

class LoginPage extends Component {


  render () {

    return (
      <div className="LoginPage">
        <header>
          <h1> WELCOME TO PLANTVENTORY</h1>
        </header>
        <form onSubmit={this.routeToHome}>
          <fieldset>
            <legend>Log In</legend>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username' required/><br/>
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' required/><br/>
            <button type="submit">
                SUBMIT
            </button>

            <p>use any login info</p>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default LoginPage;