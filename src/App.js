import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';

// import ShoppingList from './components/ShoppingList';
import Game from './components/Game/Game';
import Menu from './components/MenuComponent/MenuComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div className="App">

        <Navbar dark color="primary">
          <div className="container" >
            <NavbarBrand href="/">Main Page</NavbarBrand>
          </div>
        </Navbar>

        <Menu  dishes={this.state.dishes} />

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
