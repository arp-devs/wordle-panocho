import React from 'react';
import { GridPanel } from './components/GridPanel';
import { Keyboard } from './components/Keyboard';
import { Title } from './components/Title';


export const HeroesApp = () => {
  return (
    <div className='w-100 h-100 position-absolute top-50 start-50 translate-middle container-general'>
         
              
        <Title />
        <GridPanel />
        <Keyboard />
    </div>
 

  );
};
