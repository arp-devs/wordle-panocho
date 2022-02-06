import React, { useState } from 'react';
import { cellStateReducer } from './cellStateReducer';
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
  const secretWord = "APPLE";
  // const secretWord = "WASTE";

  document.onkeydown = function(e) {
    var key_press = e.key.toUpperCase();
    var key_code = key_press.charCodeAt(0);
    if (e.key.toUpperCase() == "BACKSPACE") {
      key_press = "DELETE"
    } else if (key_code == 13) {
      key_press = "ENTER"
    }
    handleKeyInput(key_press);
  }

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
    const incorrectsArray = [...secretWord];
    // console.log("checkWord");
    if (Object.keys(row[row.length - 1]).length > 0) {
      console.log("comprobamos palabra!");
      // comprobamos las correctas
      for (var i=0; i < row.length; i++) {
        if (secretWord.indexOf(row[i].letter) == i) {
          for (var i=0; i < incorrectsArray.length; i++) {
            if (incorrectsArray[i] === row[i].letter) {
              incorrectsArray[i] = '';
            }
          }
        }
      }
      for (var i=0; i < row.length; i++) {

        // console.log("comprobamos la: " + row[i].letter);
        const state = checkLetter(row[i].letter, i, secretWord, incorrectsArray);
        if (state === "correct") {
          corrects ++;
        } 
        //llamar al cambio de clase del teclado
        const classNameCell = cellStateReducer(state);
        document.getElementById(row[i].letter).classList.add(classNameCell);
        row[i].state = state;
      }
      setActiveRow(activeRow + 1);
      console.log(activeRow);
      if (corrects == 5) {
        setGameState("over");
        showMessage("Impressive!");
      }
      if (activeRow > 4) {
        setGameState("over");
        showMessage(secretWord);
      }
    }
  }

  const showMessage = (message) => {
    var x = document.getElementById("snackbar");
    x.textContent = message;
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    x.className.replace("show", "");
  }

  const checkLetter = (letter, index, secretWord, incorrectsArray) => {
    // if (secretWord.indexOf(letter) > -1) {
      if (secretWord[index] == letter) {
        return "correct"
      } else if (incorrectsArray.indexOf(letter) > -1){
        return "misplaced"
      } else {
        return "incorrect"
      }
    // } 

  }

  return (
    <div className='w-100 h-100 position-absolute top-50 start-50 translate-middle container-general'>
        <Title />
        <GridPanel grid={grid} activeRow={activeRow} setRow={setRow} />
        <Keyboard handleKeyInput={handleKeyInput} />
        <div id="snackbar">Some text some message..</div>
    </div>
  );
};
