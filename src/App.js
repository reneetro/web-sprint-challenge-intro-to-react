import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [charSelected, setCharSelected] = useState(null);

  const openDetails = birthYear => {
    setCharSelected(birthYear);
  }
  const closeDetails = () => {
    setCharSelected(null);
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => console.error(err));
},[])
console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.length > 0 ? characters.map(ch => {
        return <Character info={ch} key= {ch.created} openDetails = {openDetails} />
      }) : <h3> Gathering Data </h3>}
      
    </div>
  );
}

export default App;
