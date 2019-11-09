import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard'
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 0 auto;
    margin-top: 130px;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-around;
    align-items: center;
`

const StarWars = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response.data.results);
                setPeople(response.data.results);
            })
            .catch(error => {
                console.log('A jawa  stole your data', error);
            });
    }, []);
    return (
        <div>
            <CardContainer>
        {people.map((char, id) =>(
            
                <CharCard
                key={char.id}
                name={char.name}
                gender={char.gender}
                mass={char.mass} 
                height={char.height}
                eye={char.eye_color}
                hair={char.hair_color}


                />
        ))}
            </CardContainer>
        </div>
    )
}
export default StarWars;
