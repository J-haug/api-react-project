import { useEffect, useState } from "react";

function Game({game}) {
 
  return (
    <div className="game">
      <figure className="game__img--wrapper">
        <img src={game.background_image} alt="" className="game__img" />
      </figure>
      <h2 className="game__title">{game.name}</h2>
      
    </div>
  );
}

export default Game;
