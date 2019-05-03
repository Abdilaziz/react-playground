import React, {Component} from 'react';
import Board from '../Board/Board';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    // .slice() creates a copy of the squares array instead of modifying the 
    // existing array
    // two apporaches to changing data,
    //    1. Mutable: mutate the data by directly changing its values
    //    2. Immutability: to replace the data with a new copy which has the 
    // desired changes
    // Approach2 is much better:
    // undo and redo becomes simple with by using immutability
    // detecting changes becomes much easier (comparing is easier)
    // Helps build pur components
    //    Determine if changes are being made, and helps determine when a 
    //    component requres re-rendering
    //    (function called shouldComponentUpdate())
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // cant click on filled square, or if game is won
    if ( calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // concat doesn't mutate the original array
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  // React elements are first-class JavaScript Objects 
  // (can be passed around the app)

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move} >
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + 
            (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i) }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && 
            squares[a] === squares[c]) {
      // checks if player has won, and return if it is X or O
      return squares[a];
    }
  }
  return null;
}
  
export default Game;