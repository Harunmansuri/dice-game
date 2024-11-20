import React, { useState } from "react";
import styled from "styled-components";

const Role = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const genarateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = genarateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p> Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default Role;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
