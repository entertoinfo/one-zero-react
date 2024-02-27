import React from "react";
import "./tile.css";

const Tile = ({ onClick, number, index, openedIndices, matchedPairs }) => (
  <div className={`tile__inner ${openedIndices.includes(index) ? "active" : ""} + ${matchedPairs.includes(index)  ? "open" : ""}`}  id={index} onClick={() => onClick(index)}>
    <p className="tile__text">{number}</p>
  </div>
);
export default Tile;