import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './UserInput/UserInput'
import UserInput from './UserInput/UserInput';
import {UserOutput} from './UserOutput/UserOutput';

class App extends Component {
  state = {username : 'Frank'};

  changeUsername = (event) => {
    this.setState(
      { username : event.target.value }
    );
  }

  render() {
    const style = {
      fontFamily: 'Roboto'
    };

    return (
      <div className="App">
        <UserInput username={this.state.username} changedUsername={this.changeUsername} style={style} />
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
