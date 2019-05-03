import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
// import ShoppingList from './components/ShoppingList';
import Game from './components/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar dark color="primary">
          <div className="container" >
            <NavbarBrand href="/">Main Page</NavbarBrand>
          </div>
        </Navbar>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ShoppingList name="Abdilaziz"/> */}
        <Game />
      </div>
    );
  }
}

export default App;
