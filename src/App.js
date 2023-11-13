import React from 'react';
import RandomNameGenerator from './components/RandomNameGenerator';
import { firstNames, lastNames } from './components/NameData';
import { Container, Paper } from '@mui/material';
import RollDiceComponent from './components/RollDiceComponent';
import CharacterClassInfo from './components/CharacterClassInfo';
import CharacterClassDisplayBox from './components/CharacterClassDisplayBox';
import RandomBackgroundGenerator from './components/BackgroundGenerator';
import CustomContainer from './components/CustomContainer';

const App = () => {
  return (
    <Container>
      <Container>
          <RandomNameGenerator firstNames={firstNames} lastNames={lastNames} />
          <RandomBackgroundGenerator />
        <CharacterClassInfo />
        <RollDiceComponent />
      </Container>
    </Container>
  );
};

export default App;
