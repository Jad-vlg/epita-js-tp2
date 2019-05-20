import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);
    this.PlayerClicked.bind(this)
    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      stateGame: ""
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    const array = state.cells;

    if ((array[0] !== null && (array[0] === array[1] && array[1] === array[2])) ||
        (array[3] !== null && (array[3] === array[4] && array[4] === array[5])) ||
        (array[6] !== null && (array[6] === array[7] && array[7] === array[8])))
    {
          if (array[0] === "X" || array[3] === "X" || array[6] === "X" )
            state.stateGame="Player 1 won";
          else
            state.stateGame = "Player 2 won";
    }
    else if ((array[0] !== null && (array[0] === array[4] && array[4] === array[8])) ||
            (array[2] !== null && (array[2] === array[4] && array[4] === array[6])))
    {
          if (array[0] === "X" || array[2] === "X")
              state.stateGame="Player 1 won";
          else
              state.stateGame = "Player 2 won";
    }

    else if ((array[0] !== null && (array[0] === array[3] && array[3] === array[6])) ||
            (array[1] !== null && (array[1] === array[4] && array[4] === array[7])) ||
            (array[2] !== null && (array[2] === array[5] && array[5] === array[8])))
      
    {
          if (array[0] === "X" || array[1] === "X" || array[2] === "X")
            state.stateGame="Player 1 won";
          else
            state.stateGame = "Player 2 won";
    }  
    else 
    {
      let i = 0
      for ( ; i < 9; ++i)
        if (array[i] === null)
          return;
      if (i === 9)
        state.stateGame="equal";
    }
    return state;
  }


  PlayerClicked(id) {
    console.log(this.state.currentPlayer)
    let cellChanged = [...this.state.cells]
  
    cellChanged[id] = ((this.state.currentPlayer === "player 1") ? "X" : "O")  
    this.setState({
      currentPlayer : (this.state.currentPlayer === "player 1" ) ? "player 2" : "player 1",
      cells : cellChanged
    })
  }

  render() {
    console.log(this.state.currentPlayer)
    console.log(this.state.cells)
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo currentPlayer={this.state.currentPlayer} gameState={this.state.stateGame} />
        <Board  cells={this.state.cells} PlayerClickedInterGL={(id) => this.PlayerClicked(id)}/>
      </div>
    );
  }
}

export default GameLayout;
