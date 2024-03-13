import React, { useContext } from "react";
import "./menu.css";
import HandleRefresh from "../../utils/reloadPage";
import Context from "../../utils/GameContext";

function Menu() {
  const { newLevelComplexity } = useContext(Context);

  let handlerClick = (amount) => {
    newLevelComplexity(amount);
  };

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__inner">
          <button className="menu__level" onClick={HandleRefresh}>
            Restart
          </button>
          <button className="menu__level" onClick={() => handlerClick(15)}>
            Easy level
          </button>
          <button className="menu__level" onClick={() => handlerClick(30)}>
            Medium level
          </button>
          <button className="menu__level" onClick={() => handlerClick(50)}>
            Hard level
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
