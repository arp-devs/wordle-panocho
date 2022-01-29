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

  const handleFillWord = (word) => {
    setGrid(grid => [word, ...grid]);
    console.log(grid);
  } 

  useEffect(() => {
    handleFillWord(firstWord);
  }, []);

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
    </div>

    
  );
};

