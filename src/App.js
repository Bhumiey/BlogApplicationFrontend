import './App.css';
import history from './history';
import Routes from './Routes';
import React, { Component } from "react";
class App extends Component {
  onClickOfAdmin(Event) {
    history.push("/adminhome");
  }
  onClickOfHome(Event) {
    history.push("/");
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <span className="buttonsSpan">
      <button className="HomeButton" onClick={this.onClickOfHome}>
          Home
        </button>
        <button className="AdminButton" onClick={this.onClickOfAdmin}>
          Admin
        </button>
        </span>
        <h1>Blog Application</h1>
      </header>
      <Routes/>
    </div>
  );
      }
}

export default App;
