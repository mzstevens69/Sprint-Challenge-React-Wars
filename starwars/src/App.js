import React, {useState} from 'react';
import './App.css';
import StarWars from './components/StarWars';
import styled from "styled-components";

const CardContainer = styled.div `
  display: flex;
  width: 100%;

  
  
`
const SearchBar = styled.div`
    color: saddlebrown;
    margin: 0 auto;
    width: 750px;
    padding: 10px;
    background-color: cornsilk;
    border: 1px solid saddlebrown;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    input{
      margin: 0 5px;
      border-left: 1px solid saddlebrown;
      color: saddlebrown;
    }
    button {
      background-color: lightgray
      width: 80px;
    }
`

const App = () => {
  const [srch, setSrch] = useState({name:" "});

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className='App'>
    <h1 className="Header">React Wars</h1>
    
    <StarWars name={srch.name}/>
    <CardContainer>
      
      
    </CardContainer>
    
    
          <SearchBar>
          <form onSubmit={event => handleSubmit(event)}>
            <label>
              This isn't the droid you're looking for:
              <input type="text" name="name" onChange={event => handleChange(event)} />
            </label>
            <button>Ask Yoda</button>
          </form>
        </SearchBar>
       
    
    </div>
  );
}

export default App;
