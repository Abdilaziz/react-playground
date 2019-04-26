import React, {Component} from 'react';
import './Square.css';

// class Square extends Component {

    // constructor(props) {
      // all JavaScripts classes you should use super in the constructor of a subclass
      // super(props);
      // this.state = {
      //   value: null,
      // };
    // }
    // setState auto updates the child components inside
  //   render() {
  //     return (
  //       // syntax mistake of property as onClick={alert('click')} 
  //       // AKA not passing a function, would fire the alert event every time the component re-renders
  //       // now react will re-render the square whenever the its button is clicked
  //       // after the update the state will be 'X'
  //       // Note: when you call setState in a component, React auto updates the child components
  //       // inside of it too
  //       // <button 
  //       //   className="square"
  //       //   onClick={ ()=> this.setState({value: 'X'}) } 
  //       // >
  //       //   {this.state.value}
  //       // </button>
  //       <button 
  //         className="square"
  //         onClick={ ()=> this.props.onClick() } 
  //       >
  //         {this.props.value}
  //       </button>
  //     );
  //   }
  // };

  // functions with only a render method (no state) can be easily written as a 
  // function component
  //

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square;