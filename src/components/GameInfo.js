import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => {

  if (gameState === "")
    return (<h3>It's your turn {currentPlayer}</h3>)
  else
    return (<h3>{gameState}</h3>)
}



export default GameInfo;
