import React, { Component } from 'react';


class Home extends Component {

  routeToHome = () => {
      this.props.history.push('/all-plants')
    }
  render() {

    return (
      <div className="Home">
        <header>
          <h1>PLANTVENTORY</h1>
        </header>
        <h2>
          About
        </h2>
        <p>
          Take care of your plants with ease. 
          Plantventory allows users to browse through available plants with care details to help plant owners
          find proper care for plants. By adding plants to the user list, the user can easily keep tabs on their 
          plants to determine the best care for them.
          </p>
        {/* <form onSubmit={this.routeToHome}>
          <fieldset>
            <legend>Log In</legend>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username' required/><br/>
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' required/><br/>
            <p>Enter any username and password and click submit</p>
            <button type="submit">
                SUBMIT
            </button>

          </fieldset>
        </form> */}
      </div>

    )
  }
}

export default Home;