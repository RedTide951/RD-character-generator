import React from "react";
import RandomNameGenerator from "../components/RandomNameGenerator";
import { firstNames, lastNames } from "../components/NameData";
import { Container } from "@mui/material";
import RollDiceComponent from "../components/RollDiceComponent";
import CharacterClassInfo from "../components/CharacterClassInfo";
import RandomBackgroundGenerator from "../components/BackgroundGenerator";
import { Header } from "../components/Header";

const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/30/b8/f0/30b8f0f3d3002600f59ab892ed04fce5.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container>
        <RandomNameGenerator firstNames={firstNames} lastNames={lastNames} />
        <RandomBackgroundGenerator />
        <CharacterClassInfo />
        <RollDiceComponent />
      </Container>
    </div>
  );
};

export default Main;
