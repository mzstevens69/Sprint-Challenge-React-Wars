import React from 'react';
import styled from "styled-components";
const Card = styled.div`
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    max-width: 30%;
    background-color: orange;
    border: 1px solid midnightblue;   
    overflow: hidden;
    margin: 25px auto;
    border-radius: 12px;
    height: 100%;
    
    
`;
const CardWrapper = styled.div `
   
    
`;
const MainTitle = styled.h2 `
    color: dodgerblue;

`;
const Wrapper = styled.div `
    background-color: lightgray;
`;
const AltWrapper = styled.div `
    background-color: lightskyblue;
    width: 250px;
`;

const CharCard = props => {
    return (
    <CardWrapper>
        <Card>
            <AltWrapper>                
            <MainTitle>Name</MainTitle>
            {props.name}
            </AltWrapper>
            <Wrapper>
            <MainTitle>Gender</MainTitle>    
            {props.gender}
            </Wrapper>
            <Wrapper>
            <MainTitle>Mass</MainTitle>    
            {props.mass}
            </Wrapper>
            <Wrapper>
            <MainTitle>Height</MainTitle>
            {props.height}
            </Wrapper>
            <Wrapper>
            {props.eye_color}
            </Wrapper>
            <Wrapper>
            {props.hair_color}
            </Wrapper>
            
            
           

        </Card>
    </CardWrapper>

    )
}

export default CharCard;