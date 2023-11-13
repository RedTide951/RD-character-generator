import React, { useState } from 'react';
import Button from '@mui/material/Button';

const abilityNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Perception', 'Willpower', 'Charisma'];

const RollDiceComponent = () => {
  const [results, setResults] = useState([]);

  const rollDice = () => {
    const rolls = [];
    for (let i = 0; i < abilityNames.length; i++) {
      const diceResults = [];
      for (let j = 0; j < 3; j++) {
        diceResults.push(Math.floor(Math.random() * 6) + 1);
      }
      const totalResult = diceResults.reduce((sum, value) => sum + value, 0);
      const modifier = calculateModifier(totalResult);
      rolls.push({ ability: abilityNames[i], result: totalResult, modifier });
    }
    setResults(rolls);
  };

  const calculateModifier = (score) => {
    return Math.floor((score - 10) / 2);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
    <Button variant="contained" color="primary" onClick={rollDice}>
      Roll Stats
    </Button>
    {results.length > 0 && (
      <div className="dice-results">
        {results.map((roll, index) => (
          <div key={index} className="result-item">
            <p>{roll.ability}</p>
            <p>{`${roll.result}`}</p>
            <p style={{ fontWeight: 'bold' }}>{`Modifier: ${roll.modifier > 0 ? '+' : ''}${roll.modifier}`}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default RollDiceComponent;
