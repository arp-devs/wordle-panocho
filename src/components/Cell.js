import React from 'react';
import { cellStateReducer } from '../cellStateReducer';

export const Cell = ({state="", letter="", key}) => {

    const classNameCell = cellStateReducer(state);

    return (
        <div className={"cell " + classNameCell} key={key}>
            {letter}
        </div>
    )
};
