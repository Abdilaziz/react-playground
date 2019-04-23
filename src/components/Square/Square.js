import React, {Component} from 'react';
import './Square.css';

class Square extends Component {

    constructor(props) {
      // all JavaScripts classes you should use super in the constructor of a subclass
      super(props);
      this.state = {
        value: null,
      };
    }
    // setState auto updates the child components inside
    render() {
      return (
        <button 
          className="square" 
          onClick={ ()=> this.setState({value: 'X'}) } 
        >
          {this.state.value}
        </button>
      );
    }
  };

  export default Square;