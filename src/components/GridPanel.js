import { useEffect, useState } from 'react';
import '../HeroesApp.css';
import { Row } from './Row';

export const GridPanel = ({grid, activeRow, setRow}) => {
  
  useEffect(() => {
      setRow(grid[activeRow])
  }, [activeRow])

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

