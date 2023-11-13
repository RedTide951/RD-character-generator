// CharacterClassDisplayBox.jsx
import React from 'react';

const CharacterClassDisplayBox = ({ classInfo }) => {
  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
      {classInfo ? (
        <>
          <p><strong>Class:</strong> {classInfo.name}</p>
          <p>{classInfo.description}</p>
          <p><strong>Prime Ability:</strong> {classInfo.primeAbility}</p>
          <p><strong>Hit Dice:</strong> {classInfo.hitDice}</p>
          <p><strong>Max Level:</strong> {classInfo.maxLevel}</p>
          <p><strong>Armour:</strong> {classInfo.armour}</p>
          <p><strong>Weapons:</strong> {classInfo.weapons}</p>
          <p><strong>Level Up XP:</strong> {classInfo.levelUpXP}</p>
          <h3>Features:</h3>
          <ul>
            {classInfo.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No class selected.</p>
      )}
    </div>
  );
};

export default CharacterClassDisplayBox;
