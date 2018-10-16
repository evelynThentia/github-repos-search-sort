import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Login from "./Login.js";
import Profile from "./Profile.js";
// import { handleChangeUsername, handleChangeFirstName, login, handleLogout, getEventsAndPRs, handleSort, sortFunction, ascendingSort, descendingSort } from "./actions";
import { handleChangeUsername, handleChangeFirstName, login, handleLogout, getEventsAndPRs } from "./actions";


class App extends Component {

  componentDidUpdate(prevProps) {
    // this.props.sort === 'Earliest'
    //   ? this.props.sortFunction = this.props.ascendingSort
    //   : this.props.sortFunction = this.props.descendingSort;

    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.getEventsAndPRs(`https://api.github.com/users/${this.props.username}/events`);
      }
    }


  }

  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.props.loggedIn 
          // ? (<Profile {...this.props.profile} events={this.props.events} requests={this.props.pullRequests} handleLogOut={this.props.handleLogOut} handleSort={this.props.handleSort} />)
            ? (<Profile {...this.props.profile} events={this.props.events} requests={this.props.pullRequests} handleLogOut={this.props.handleLogOut} />)
            : (<Login
            handleChangeUsername={this.props.handleChangeUsername}
            handleChangeFirstName={this.props.handleChangeFirstName}
            handleLogin={() => this.props.login(this.props.username)}
            username={this.props.username}
            firstName={this.props.firstName} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  handleChangeFirstName,
  login,
  handleLogout,
  getEventsAndPRs,
  // handleSort,
  // sortFunction,
  // ascendingSort,
  // descendingSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
