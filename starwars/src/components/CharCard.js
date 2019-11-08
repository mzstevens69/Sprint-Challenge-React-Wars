import React from 'react';
import styled from "styled-components";
const Card = styled.div`
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    max-width: 300px;
    background-color: slategrey;
    border: 3px solid orange;   
    overflow: hidden;
    margin: 25px auto;
    border-radius: 12px;
    height: 100%;
    
    
`;
const CardWrapper = styled.div `
   
    
`;
const MainTitle = styled.h2 `
    color: saddlebrown;
    margin-bottom: -10%;

`;
const Wrapper = styled.div `
    background-color: lightgray;
`;
const AltWrapper = styled.div `
    background-color: orange;
    
    
`;
const Text = styled.p `
    padding: 4%;
    font-size: 1.4rem;
    margin-bottom: 6%;
    color: cornsilk;
`

const CharCard = props => {
    return (
    <CardWrapper>
        <Card>
            <AltWrapper>                
            <MainTitle>Name</MainTitle>
            <Text>{props.name}</Text>
            </AltWrapper>
            <Wrapper>
            <MainTitle>Gender</MainTitle>    
            <Text>{props.gender}</Text>
            </Wrapper>
            <Wrapper>
            <MainTitle>Mass</MainTitle>    
            <Text>{props.mass}</Text>
            </Wrapper>
            <Wrapper>
            <MainTitle>Height</MainTitle>
            <Text>{props.height}</Text>
            </Wrapper>
           
            
            
           

        </Card>
    </CardWrapper>

    )
}

export default CharCard;