import React, { useState } from "react";
import "./gameContainer.css";
import Tile from "../Tile/Tile";
import Pairs from "../../utils/utils";

const GameContainer = () => {
  const [openedIndices, setOpenedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const resetArray = () => {
    setTimeout(() => {
      setOpenedIndices([]);
    }, 600);
  };

  const handleTileClick = (index) => {
    if (openedIndices.includes(index) || matchedPairs.includes(index)) {
      return;
    }
    const newOpenedIndices = [...openedIndices, index];
    setOpenedIndices(newOpenedIndices);

    if (newOpenedIndices.length === 2) {
      const [index1, index2] = newOpenedIndices;
      if (Pairs[index1] === Pairs[index2]) {
        setMatchedPairs([...matchedPairs, index1, index2]);
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
          {Pairs.map((number, index) => (
            <Tile
              key={index}
              number={number}
              index={index}
              openedIndices={openedIndices}
              matchedPairs={matchedPairs}
              onClick={() => handleTileClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
