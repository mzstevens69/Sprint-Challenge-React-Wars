import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard'

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
        {people.map(char =>(
            <div>
                <CharCard
                key={char.id}
                name={char.name}
                gender={char.gender}
                mass={char.mass} 
                height={char.height}
                eye={char.eye_color}
                hair={char.hair_color}


                />
            </div>
        



        ))}
        </div>
    )
}
export default StarWars;
