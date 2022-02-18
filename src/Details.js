import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details(props) {
    
    const { character, close } = props;
    const [details, setDetails] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
          .then(res => {
            setDetails(res.data);
          }).catch(err => console.error(err))
      }, [character])

      return (
        <div className='container'>
            {console.log('details')}
        <h2>Details of Character: {details.name}</h2>
        {
          details &&
          <>
            <p>Gender: {details.gender}</p>
            <p>Height:  {details.height}</p>
            <p>Birth Year: {details.birth_year}</p>
          </>
        }
        <button onClick={close}>Close</button>
      </div>
      )
}