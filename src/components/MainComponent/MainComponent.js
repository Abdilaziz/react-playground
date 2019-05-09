import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../MenuComponent/MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Home from '../HomeComponent/HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      <Home 
      />
    };

    return (
      <div>

        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        </Switch>

        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />

        

        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      </div>
    );
  }
}

export default Main;