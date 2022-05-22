import React from 'react';
import styled from 'styled-components';

export default function Top() {
    return (
        <TopDiv>
            <div>CINEFLEX</div>
        </TopDiv>
    );
}




const TopDiv = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #C3CFD9;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 76px;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;

`;