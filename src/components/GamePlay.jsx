import React from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import styled from 'styled-components'
import Role from './Role'
import { useState } from 'react'

const GamePlay = () => {

    const [selectedNumber , setSelectedNumber] = useState();
  return (
    <MainConatiner>
        <div className="top_section">
        <TotalScore/>
        <NumberSelecter
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
        </div>
        <Role/>
    </MainConatiner>
  )
}

export default GamePlay

const MainConatiner = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`;