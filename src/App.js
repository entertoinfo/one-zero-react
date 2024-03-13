import { useState } from "react";
import Header from "./components/Header/Header";
import GameContainer from "./components/GameContainer/GameContainer";
import Menu from "./components/Menu/Menu";
import Context from "./utils/GameContext";
import { GameplayCreation, PAIRS } from "./utils/utils";

function App() {
  const [levelComplexity, newLevelComplexity] = useState(15);
  const value = {
    levelComplexity,
    newLevelComplexity,
    PAIRS
  };

  GameplayCreation(levelComplexity);

  return (
    <Context.Provider value={value}>
      <Header />
      <Menu />
      <GameContainer />
    </Context.Provider>
  );
}

export default App;