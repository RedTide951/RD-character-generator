// CharacterClassInfo.jsx
import React, { useState } from 'react';
import CharacterClassDisplayBox from './CharacterClassDisplayBox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CharacterClassInfo = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const classInfo = {
    fighter: {
      name: "Fighter",
      description: "Fighters are adventurers trained in warfare and combat. In a group of adventurers, the role of fighters is to battle monsters and to defend other characters.",
      primeAbility: "Strength",
      hitDice: "1d8",
      maxLevel: 14,
      armour: "Any, shields",
      weapons: "Any",
      levelUpXP: 2000,
      features: [
        "Multiattack: At level 5, 10, 14 gain extra attack",
        "Heroism: Start with an extra Hero Dice.",
        "Stronghold: Any time a fighter wishes (and has sufficient money), they can build a castle or stronghold and control the surrounding lands.",
        "After Reaching 9th Level: A fighter may be granted a title such as Baron or Baroness. The land under the fighter’s control is then known as a Barony."
      ]
    },
    cleric: {
      name: "Cleric",
      description: "Clerics are adventurers sworn to the service of a deity. They are trained for battle and channel the power of their deity.",
      primeAbility: "Willpower",
      hitDice: "1d6",
      maxLevel: 14,
      armour: "Any, shields",
      weapons: "Any blunt weapon",
      levelUpXP: 1500,
      features: [
        "Combat: The edicts of their holy order forbid them from using weapons that have a sharp, cutting edge or stabbing point",
        "Turn Undead: Clerics can invoke the power of their deity to repel undead monsters encountered. (DC 8 + highest undead level)",
        "Deity Disfavour: Clerics who fall from favour with their deity may incur penalties. A cleric must carry a holy symbol.",
        "Magical Research: A cleric of any level may spend time and money on magical research. This allows them to create new spells or other magical effects associated with their deity.",
        "Spell Casting: Once a cleric has proven their faith (from 2nd level), the character may pray to receive spells. [Known spells = Level - 1]"
      ]
    },
    wizard: {
      name: "Wizard",
      description: "Wizards are adventurers whose study of secret arcane lore has taught them how to cast spells and to wield powerful magic items. Magic-users begin play with knowledge of just a single spell, but gain access to extremely potent magic as they advance.",
      primeAbility: "Intelligence",
      hitDice: "1d4",
      maxLevel: 14,
      armour: "None",
      weapons: "Dagger, staff",
      levelUpXP: 2500,
      features: [
        "Magical Research: A wizard may spend time and money on magical research. This allows them to add new spells to their spell book and to research other magical effects. When a magic-user reaches 9th level, they are also able to create magic items.",
        "Spell Casting: Start with 1 spell. Learn 1 new spell each level. Can learn spells by studying or from another caster. Can memorize spells equal to INT modifier.",
        "After Reaching 11th Level: A wizard may construct a tower. Apprentices of levels 1–3 will then arrive to study under the wizard."
      ]
    },
    thief: {
      name: "Thief",
      description: "Thieves are adventurers who live by their skills of deception and stealth. They have a range of specialized adventuring skills unavailable to other characters. However, thieves are not always to be trusted.",
      primeAbility: "Dexterity",
      hitDice: "1d4",
      maxLevel: 14,
      armour: "Leather, no shields",
      weapons: "Any",
      levelUpXP: 1200,
      features: [
        "Back-stab: When attacking an unaware opponent from behind, a thief gains advantage on to hit roll and doubles any damage dealt.",
        "After Reaching 9th Level: A thief may construct a secret hideout, attracting 2d6 apprentice thieves of 1st level. The character may use their apprentices as the beginnings of a Thieves’ Guild."
      ]
    },
    paladin: {
      name: "Paladin",
      description: "Paladins are warriors sworn by sacred oath to the service of a Lawful holy order.",
      primeAbility: "Charisma",
      hitDice: "d8",
      maxLevel: 14,
      levelUpXP: 2750,
      armour: "Any leather, chainmail, plate, shields",
      weapons: "Any",
      features: [
        "Channel Divinity: Paladins gain divinity slots equal to paladin level + CHAR modifier. Divine slots can be used for following skills. Paladins who act against their oath may incur penalties.",
        "Divine Smite: Paladins can use Divine Smite on their successful hit. Divine Smite adds 1d6 per divine slots spent to damage roll.",
        "Divine Sense: Paladins can sense the evil aura and undead within 60ft.",
        "Lay on Hands: Paladins can heal a creature they touch equal to divine slots spent."
      ]
    },
    ranger: {
      name: "Ranger",
      description: "Rangers are members of a secret society which protects their native lands from invasion and the influence of Chaos. They are skilled warriors who are adapted to life in the wilds. At higher levels, their connection with nature grants them the ability to cast spells.",
      primeAbility: "Perception",
      hitDice: "d6",
      maxLevel: 14,
      armour: "Leather, wooden shields",
      weapons: "Bow, sword, dagger",
      levelUpXP: 2000,
      features: [
        "Natural Magic: Rangers can learn divine spells equal to half of their ranger level rounded down.",
        "Beast Companion: Rangers can train any natural beast as a companion.",
        "Tracking: Rangers have advantage on pathfinding or tracking rolls."
      ]
    }
    // Add information for other character classes here
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <FormControl style={{ minWidth: 250 }}>
        <InputLabel htmlFor="classDropdown">Select Character Class</InputLabel>
        <Select
          label="Select Character Class"
          value={selectedClass}
          onChange={handleClassChange}
        >
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value="fighter">Fighter</MenuItem>
          <MenuItem value="cleric">Cleric</MenuItem>
          <MenuItem value="wizard">Wizard</MenuItem>
          <MenuItem value="thief">Thief</MenuItem>
          <MenuItem value="ranger">Ranger</MenuItem>
          <MenuItem value="paladin">Paladin</MenuItem>
          {/* Add options for other character classes here */}
        </Select>
      </FormControl>

      {/* Display selected class information using CharacterClassDisplayBox */}
      <CharacterClassDisplayBox classInfo={classInfo[selectedClass]} />
    </div>
  );
};

export default CharacterClassInfo;
