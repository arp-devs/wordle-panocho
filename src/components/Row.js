import React from 'react';
import { Cell } from './Cell';

export const Row = ({word, index}) => {
    // console.log(word);
  return (
    <div className="d-flex justify-content-center" key={index}>
        {/* {
            word.map((letter, index) => (
                <Cell 
                    key={index}
                    state={letter.state} 
                    letter={letter.letter}
                />
            ))    
        } */}
        <Cell letter={word[0].letter} state={word[0].state} key={0} />
        <Cell letter={word[1].letter} state={word[1].state} key={1} />
        <Cell letter={word[2].letter} state={word[2].state} key={2} />
        <Cell letter={word[3].letter} state={word[3].state} key={3} />
        <Cell letter={word[4].letter} state={word[4].state} key={4} />
    </div>
  )
};
