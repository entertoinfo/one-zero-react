import React, { useState } from "react";
import Menu from "../components/Menu/Menu"

// Генеруємо масив чисел
 const Pairs = [];

  function GameLogic(amountPairs) {
    function generateRandomPairs(amountPairs) {    
      const numbers = Array.from({ length: amountPairs }, (_, i) => i + 1);
  
      while (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers.splice(randomIndex, 1)[0];
        Pairs.push(number, number);
      }
      return Pairs;
    }
    generateRandomPairs(amountPairs)

    // Перемішуємо числа в масиві
    const shuffle = (Pairs) => {
      let numLength = Pairs.length;
      let currentIndex, nextIndex;
  
      while (numLength) {
        nextIndex = Math.floor(Math.random() * numLength--);
        currentIndex = Pairs[numLength];
        Pairs[numLength] = Pairs[nextIndex];
        Pairs[nextIndex] = currentIndex;
      }
      return Pairs;
    };
    shuffle(Pairs);
   }
  
   GameLogic(20)

  
 
export default Pairs;