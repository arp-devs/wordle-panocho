import React from 'react';
import { Key } from './Key';

export const Keyboard = ({handleKeyInput}) => {
    const keyboard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keyboardRow3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]
    return (

        <div className='keyboard'>
            <div className="keyboard-row row justify-content-center"> 

                {
                    keyboardRow1.map((letter, index) => (

                        <Key 
                            key={index}
                            state="" 
                            letter={letter}
                            handleKeyInput={handleKeyInput}
                            />
                            )) 
                        }
            </div>
            <div className="keyboard-row row justify-content-center"> 

                {
                    keyboardRow2.map((letter, index) => (
                        
                        <Key 
                        key={index}
                        state="" 
                        letter={letter}
                        handleKeyInput={handleKeyInput}
                        />
                        )) 
                    }
            </div>
            <div className="keyboard-row row justify-content-center"> 

                {
                    keyboardRow3.map((letter, index) => (
                        
                        <Key 
                        key={index}
                        state="" 
                        letter={letter}
                        handleKeyInput={handleKeyInput}
                        />
                    )) 
                }
            </div>
        </div>

    )
};
