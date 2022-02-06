import React from 'react';
import { cellStateReducer } from '../cellStateReducer';

export const Key = ({state="", letter="", key, handleKeyInput}) => {

    const classNameCell = cellStateReducer(state);

    const classNameBigger = (letter) => {
        if (letter === "ENTER" || letter === "DELETE") {
            return " one-and-a-half";
        }
        return "";
    }

    return ( 
        <div className={"key disable-select " + classNameCell + classNameBigger(letter) } key={key} id={letter} onClick={() => handleKeyInput(letter)}>
            {letter}
        </div>
    );
};
