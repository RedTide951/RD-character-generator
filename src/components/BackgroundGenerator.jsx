import React, { useState } from 'react';
import { Button } from '@mui/material';

const RandomBackgroundGenerator = () => {
  const backgrounds = [
    "<strong>Urchin:</strong> You grew up in the merciless streets of a large city",
    "<strong>Wanted:</strong> There's a price on your head, but you have allies",
    "<strong>Cult Initiate:</strong> You know blasphemous secrets and rituals",
    "<strong>Thieves' Guild:</strong> You have connections, contacts, and debts",
    "<strong>Banished:</strong> Your people cast you out for supposed crimes",
    "<strong>Orphaned:</strong> An unusual guardian rescued and raised you",
    "<strong>Wizard's Apprentice:</strong> You have a knack and eye for magic",
    "<strong>Jeweler:</strong> You can easily appraise value and authenticity",
    "<strong>Herbalist:</strong> You know plants, medicines, and poisons",
    "<strong>Barbarian:</strong> You left the horde, but it never quite left you",
    "<strong>Mercenary:</strong> You fought friend and foe alike for your coin",
    "<strong>Sailor:</strong> Pirate, privateer, or merchant — the seas are yours",
    "<strong>Acolyte:</strong> You're well trained in religious rites and doctrines",
    "<strong>Soldier:</strong> You served as a fighter in an organized army",
    "<strong>Ranger:</strong> The woods and wilds are your true home",
    "<strong>Scout:</strong> You survived on stealth, observation, and speed",
    "<strong>Minstrel:</strong> You've traveled far with your charm and talent",
    "<strong>Scholar:</strong> You know much about ancient history and lore",
    "<strong>Noble:</strong> A famous name has opened many doors for you",
    "<strong>Chirurgeon:</strong> You know anatomy, surgery, and first aid"
  ];

  const [randomBackground, setRandomBackground] = useState('');

  const generateRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setRandomBackground(backgrounds[randomIndex]);
  };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button variant="contained" color="primary" style={{ marginRight: '10px', width: '220px' }} onClick={generateRandomBackground}>
        Generate Background
      </Button>
      {randomBackground && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: randomBackground.replace(/\n/g, '<br/>') }}></p>
        </div>
      )}
    </div>
  );
};

export default RandomBackgroundGenerator;
