import React, { useContext, useState } from "react";
import "./gameContainer.css";
import Tile from "../Tile/Tile";
import Context from "../../utils/GameContext";

const GameContainer = () => {
  const { PAIRS } = useContext(Context)


  const [isPressed, setIsPressed] = useState([]);

  const resetArray = () => {
    setTimeout(() => {
      setIsPressed([]);
    }, 600);
  };


  const [isOpen, setIsOpen] = useState([]);

  const handleTileClick = (index) => {
    if (isPressed.includes(index) || isOpen.includes(index)) {
      return;
    }

    const newIsPressed = [...isPressed, index];
    setIsPressed(newIsPressed);

    
    if (newIsPressed.length === 2) {
      const [index1, index2] = newIsPressed;
      if (PAIRS[index1] === PAIRS[index2]) {
        setIsOpen([...isOpen, index1, index2]);
        resetArray();
      } else {
        resetArray();
      }
    }
  };
  return (
    <div className="container">
      <div className="game__container">
        <div className="game">
          {PAIRS.map((number, index) => (
            <Tile
              key={index}
              number={number}
              index={index}
              isPressed={isPressed}
              isOpen={isOpen}
              onClick={() => handleTileClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
