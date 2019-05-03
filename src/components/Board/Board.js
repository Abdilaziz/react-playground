import React, {Component} from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  renderSquare(i) {
    // pass the square its value (either X, O, or null)
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} 
      />
    );
  }
  
  render() {

    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // }
    // else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O' );
    // }

    // parent component pass its state to child components through props
    // child component lifts its state into a parent 
    // component (by passing callback to child)
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;