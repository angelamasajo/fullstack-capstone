import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AllEntriesPage from "./AllEntriesPage/AllEntriesPage";
// import MyPlantsPage from "./MyPlantsPage/MyPlantsPage";
import AddEntry from "./AddEntry/AddEntry";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              history={this.props.history}
            />
            <Route path="/all-entries" component={AllEntriesPage} />
            <Route path="/add-entry" component={AddEntry} />
            {/* <Route path="/my-plants" component={MyPlantsPage} /> */}
          </Switch>
        </main>
        <footer>Moodly by Angela Masajo</footer>
      </div>
    );
  }
}

export default App;
