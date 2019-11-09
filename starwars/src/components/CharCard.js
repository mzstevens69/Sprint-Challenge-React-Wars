import React from 'react';
import styled from "styled-components";
//wraps each div with API info
const Card = styled.div`

    
    
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.5);
    width: 300px;
    background-color: orange;
    border: 3px solid orange;   
    overflow: hidden;
    margin: 25px;
    border-radius: 12px;
    height: 100%;
    transition: transform 0.3 ease;
   
    
    
`;
const CardWrapper = styled.div `
display: flex;
flex-direction: column;


    
`;
const MainTitle = styled.h2 `
    color: saddlebrown;
    margin-bottom: -10%;
    align-items: Center;
    text-transform: capitalize;

`;
const Wrapper = styled.div `
    border: 1px solid saddlebrown 
    border-radius: 12px;
    margin: 0 4%  4%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
`;
const AltWrapper = styled.div `
    
    
    
`;
const Text = styled.p `
    padding: 4%;
    font-size: 1.4rem;
    margin-bottom: 6%;
    color: cornsilk;
    text-shadow: 2px 2px 4px #000;
`

const CharCard = props => {
    return (
    // <CardWrapper>
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
    // </CardWrapper>

    )
}

export default CharCard;

/*const withFilterProps = BaseComponent => ({ list, height }) => {
    const transformedProps = list.filter(char => char.height === height)
    return <BaseComponent list={transformedProps}/>
} 
const renderDisplayList = ({list}) =>
    <div>
        {list.map(char => 
            <div key={char.name}>
                <div>Character: {char.side}</div>
                <div>Height: {char.height}</div>
            </div>
        )}    
    </div>

    const FilteredList = withFilterProps(renderDisplayList)
    ReactDOM.render (
        <filteredList height='tall' list={starWarsChars}/>,
        document.getElementsById('app'))
        
        
        const withTransformProps = mapperFunc =>
        BaseComponent => baseProps => {
            cosnt transformedProps = mapperFunc(baseProps)
            return <BaseComponent {
                ...transformedProps}/>
            }*/