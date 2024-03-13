let PAIRS = [];

function GameplayCreation(levelComplexity) {
  PAIRS = [];
  
  function generateRandomPairs(levelComplexity) {
    const numbers = Array.from({ length: levelComplexity }, (_, i) => i + 1);

    while (numbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const number = numbers.splice(randomIndex, 1)[0];
      PAIRS.push(number, number);
    }
    return PAIRS;
  }

  generateRandomPairs(levelComplexity);

  // Перемішуємо числа в масиві
  const shuffle = (PAIRS) => {
    let numLength = PAIRS.length;
    let currentIndex, nextIndex;

    while (numLength) {
      nextIndex = Math.floor(Math.random() * numLength--);
      currentIndex = PAIRS[numLength];
      PAIRS[numLength] = PAIRS[nextIndex];
      PAIRS[nextIndex] = currentIndex;
    }
    return PAIRS;
  };

  shuffle(PAIRS);
}

export { PAIRS, GameplayCreation };
