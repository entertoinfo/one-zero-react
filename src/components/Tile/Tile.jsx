import React from "react";
import classNames from "classnames";
import "./tile.css";

const Tile = ({ onClick, number, index, isPressed, isOpen }) => {
  const btnClass = classNames({
    'tile__inner': true,
    'active': isPressed.includes(index),
    'open': isOpen.includes(index),
  });

  return (
    <div className={btnClass} id={index} onClick={() => onClick(index)}>
      <p className="tile__text">{number}</p>
    </div>
  );
};

export default Tile;