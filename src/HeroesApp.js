import React from 'react';
import { GridPanel } from './components/GridPanel';
import { Keyboard } from './components/Keyboard';
import { Title } from './components/Title';


export const HeroesApp = () => {
  return (
    <div>
        <Title />
        <GridPanel />
        <Keyboard />
    </div>
  );
};
