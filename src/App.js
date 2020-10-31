import './App.css';
import history from './history';
import Routes from './Routes';
import React, { Component } from "react";
class App extends Component {
  onClickOfAdmin(Event) {
    history.push("/adminhome");
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <button className="AdminButton" onClick={this.onClickOfAdmin}>
          Admin
        </button>
        <h1>Blog Application</h1>
      </header>
      <Routes/>
    </div>
  );
      }
}

export default App;
