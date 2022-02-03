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
    // setRow(grid[activeRow]);
    
    for (var i=0; i < row.length; i++) {
      console.log("i: " + i + " < " + row.length);
      if (Object.keys(row[i]).length == 0) {
        row[i] = letter;
        // setRow(row);
        break;
      } else {
        if (i === (row.length - 1)) { 
          setActiveRow(activeRow + 1) ;
          // setRow(grid[activeRow + 1]);
        }
      }
    }

    grid[activeRow] = row;
    setGrid(grid => [...grid, row]);

  } 

  useEffect(() => {
      setRow(grid[activeRow])
  }, [activeRow])

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
      {/* {activeRow}
      <button onClick={() => handleFillLetter({
       letter:"F",
       state:""
     })}>Añadir</button> */}
    </div>

    
  );
};

