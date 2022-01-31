import { useEffect, useState } from 'react';
import '../HeroesApp.css';
import { Row } from './Row';

export const GridPanel = () => {

  const [grid, setGrid] = useState([ 
                                      [{},{},{},{},{}],                               
                                      [{},{},{},{},{}],                               
                                      [{},{},{},{},{}],
                                      [{},{},{},{},{}],
                                      [{},{},{},{},{}],
                                      [{},{},{},{},{}]
                                    ]);
  var currentGrid = [ 
                      [{},{},{},{},{}],                               
                      [{},{},{},{},{}],                               
                      [{},{},{},{},{}],
                      [{},{},{},{},{}],
                      [{},{},{},{},{}],
                      [{},{},{},{},{}]
                    ];

  const [row, setRow] = useState([{}, {}, {}, {}, {}]);
  const [activeRow, setActiveRow] = useState(0);

  var currentRow = [{}, {}, {}, {}, {}];

  const firstWord = [
    {
      letter:"P",
      state:"correct"
    }, {
      letter:"O",
      state:"incorrect"
    }, {
      letter:"I",
      state:"misplaced"
    }, {
      letter:"N",
      state:"incorrect"
    }, {
      letter:"T",
      state:"incorrect"
    } 
  ]
  
  const handleFillLetter = (letter) => {
    var increaseActiveRow = 0;
    // console.log("currentGrid:");
    // console.log(currentGrid);
    // setRow(grid[activeRow]);
    console.log(row);
    // currentRow = grid[activeRow];
    setRow(grid[activeRow]);
    
    for (var i=0; i < row.length; i++) {
      if (Object.keys(row[i]).length == 0) {
        row[i] = letter;
        // grid[activeRow] = row;
        // // console.log("grid");
        // // console.log(grid[activeRow]);
        // // console.log("row");
        // // console.log(row);
        // setGrid(grid);
        // setRow(row);
        break;
      } else {
        // console.log("i: " + i);
        // console.log("length: " + (currentRow.length - 1));
        // console.log("activeRow: " + activeRow);
        if (i === (row.length - 1)) {
          increaseActiveRow = 1
        }
      }
      // this.setState();
    }
  
    setRow(row);
    
    for (var i=activeRow; i < currentGrid.length; i++) {
      if (Object.keys(currentGrid[i][0]).length == 0) {
        currentGrid[i] = row;
        break;
      }
    }
    // // console.log("activeRow: " + activeRow);
    // for (var i=activeRow; i < grid.length; i++) {
    //   if (Object.keys(grid[i][0]).length == 0) {
    //     // console.log(currentRow);
    //     //currentGrid[i] = currentRow;
    //     break;
    //   }
    // }
    // grid[activeRow] = currentRow;
    // setGrid(grid);
    
    setGrid(currentGrid);

    if (increaseActiveRow === 1) {
      setActiveRow(activeRow + 1) ;
    }
    // console.log(grid);
    
  } 

  // useEffect(() => {
  //   // handleFillWord(firstWord);
  //   // hendleLetra({
  //   //     letter:"F",
  //   //     state:"correct"
  //   //   });
  //   handleFillLetter({
  //     letter:"F",
  //     state:"correct"
  //   });
  // }, []);

  return (
    <div className='w-100 grid-panel'>
     <div className="container text-center "> 
        <Row word={grid[0]} rowIndex={0}/>        
        <Row word={grid[1]} rowIndex={1}/>        
        <Row word={grid[2]} rowIndex={2}/>        
        <Row word={grid[3]} rowIndex={3}/>        
        <Row word={grid[4]} rowIndex={4}/>        
        <Row word={grid[5]} rowIndex={5}/>            
      </div>
      <button onClick={() => handleFillLetter({
       letter:"F",
       state:""
     })}>Añadir</button>
    </div>

    
  );
};

