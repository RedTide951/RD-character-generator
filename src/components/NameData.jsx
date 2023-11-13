// nameData.js
export const firstNames = [
  "Hilde", "Eliara", "Iggs", "Willow", "Vara", "Zali",
  "Torbin", "Ryarn", "Tark", "Benny", "Gralk", "Bram",
  "Marga", "Sariel", "Nix", "Annie", "Ranna", "Clara",
  "Bruno", "Tirolas", "Lenk", "Tucker", "Korv", "Nattias",
  "Karina", "Galira", "Roke", "Marie", "Zasha", "Rina",
  "Naugrim", "Varos", "Fitz", "Hobb", "Hrogar", "Denton",
  "Brenna", "Daeniel", "Tila", "Cora", "Klara", "Mirena",
  "Darvin", "Axidor", "Riggs", "Gordie", "Tragan", "Aran",
  
]
export const lastNames = [
  "Torson", "Elyon", "Brak", "Pike", "Wulf", "Tarin",
  "Brielle", "Jirwyn", "Fink", "Lydia", "Ivara", "Yuri",
  "Ulfgar", "Natinel", "Rizzo", "Marlow", "Hirok", "Malchor",
  "Sarna", "Fiora", "Squib", "Astrid", "Aja", "Lienna",
  "Grimm", "Ruhiel", "Grix", "Jasper", "Zoraan", "Godfrey",
  "Korbin", "Marson", "Finnoman", "Eilery", "Stein", "Dunnargan"
];

export const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const generateRandomName = () => {
  const randomFirstName = getRandomElement(firstNames);
  const randomLastName = getRandomElement(lastNames);
  return `${randomFirstName} ${randomLastName}`;
};
