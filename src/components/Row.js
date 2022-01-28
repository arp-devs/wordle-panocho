import React from 'react';
import { Cell } from './Cell';

export const Row = ({word, index}) => {
    // console.log(word);
  return (
    <div className="row m-0 linea d-flex justify-content-center" key={index}>
        {
            word.map((letter, index) => (
                <Cell 
                    key={index}
                    state={letter.state} 
                    letter={letter.letter}
                />
            ))    
        }
    </div>
  )
};
