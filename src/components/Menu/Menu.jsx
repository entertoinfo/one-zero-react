import React, { useState } from "react";
import "./menu.css";
import HandleRefresh from "../../utils/reloadPage"
  
function Menu() {

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__inner">
          <button className="menu__level" onClick={HandleRefresh}>Restart</button>
          <button className="menu__level">Easy level</button>
          <button className="menu__level">Medium level</button>
          <button className="menu__level">Hard level</button>
        </div>
      </div>
    </div>
  );
}
export default Menu;