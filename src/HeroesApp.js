import React, { useState } from 'react';
import { GridPanel } from './components/GridPanel';
import { Keyboard } from './components/Keyboard';
import { Title } from './components/Title';


export const HeroesApp = () => {

  const [grid, setGrid] = useState([ 
    [{},{},{},{},{}],                               
    [{},{},{},{},{}],                               
    [{},{},{},{},{}],
    [{},{},{},{},{}],
    [{},{},{},{},{}],
    [{},{},{},{},{}]
  ]);

  const [row, setRow] = useState([{}, {}, {}, {}, {}]);
  const [activeRow, setActiveRow] = useState(0);
  const [gameState, setGameState] = useState("playing");
  const secretWord = "POINT";

  const handleKeyInput = (letter) => {
    if (gameState === "playing") {
      if (letter === "ENTER") {
        checkWord();
      } else if (letter === "DELETE") {
        for (var i=row.length - 1; i >= 0 ; i--) {
          if (Object.keys(row[i]).length > 0) {
            row[i] = {};
            break;
          }
        }
        setGrid(grid => [...grid, row]);
      } else {

        for (var i=0; i < row.length; i++) {

          if (Object.keys(row[i]).length == 0) {
            row[i] = {
              letter,
              state: ""
            };
            break;
          } else {
            if (i === (row.length - 1)) { 
              // setActiveRow(activeRow + 1) ;
            }
          }
        }
      setGrid(grid => [...grid, row]);
    }
   }
  } 

  const checkWord = () => {
    var corrects = 0;
    // console.log("checkWord");
    if (Object.keys(row[row.length - 1]).length > 0) {
      console.log("comprobamos palabra!");
      for (var i=0; i < row.length; i++) {

        // console.log("comprobamos la: " + row[i].letter);
        const state = checkLetter(row[i].letter, i, secretWord);
        if (state === "correct") {
          corrects ++;
        }
        row[i].state = state;
      }
      setActiveRow(activeRow + 1);
      if (corrects == 5) {
        setGameState("over");
      }
    }

  }
  const checkLetter = (letter, index, secretWord) => {

    if (secretWord.indexOf(letter) > -1) {
      if (secretWord.indexOf(letter) == index) {
        return "correct"
      } else {
        return "misplaced"
      }
    } else {
      return "incorrect"
    }

  }

  return (
    <div className='w-100 h-100 position-absolute top-50 start-50 translate-middle container-general'>
        <Title />
        <GridPanel grid={grid} activeRow={activeRow} setRow={setRow} />
        <Keyboard handleKeyInput={handleKeyInput}/>
    </div>
  );
};
