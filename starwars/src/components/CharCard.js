import React from 'react';
import styled from "styled-components";
const Card = styled.div`
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    max-width: 300px;
    background-color: orange;
    border: 1px solid midnightblue;   
    overflow: hidden;
    margin: 25px auto;
    border-radius: 12px;
    
`;
const CardWrapper = styled.div `
   
    
`;
const MainTitle = styled.h1 `


`

const CharCard = props => {
    return (
    <CardWrapper>
        <Card>
            <div>                
            <MainTitle>Name</MainTitle>
            {props.name}
            </div>
            <div>
            {props.gender}
            </div>
            <div>
            {props.mass}
            </div>
            <div>
            {props.height}
            </div>
            <div>
            {props.eye_color}
            </div>
            <div>
            {props.hair_color}
            </div>
            
            
           

        </Card>
    </CardWrapper>

    )
}

export default CharCard;