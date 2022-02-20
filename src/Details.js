import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    background-color: white;
    opacity: .7;
    font-family: 'Redressed', cursive;
    
    h2{
        padding-top: 2%;
    }

    p{
        font-size: 1.2rem;
    }

    button{
        margin-bottom: 2%;
        background-color: #DCA686;
        border-radius: 50%;
        width: 15vh;
        height: 5vh;
        &:hover{
            transform: scale(1.1);
            background-color: #DC7438;
            color: white;
        }
    }    
`

export default function Details(props) {
    
    const { character, close } = props;
    console.log(character);

      return (
        <StyledDetails className='container'>
        <h2>Details of Character: {character.name}</h2>
        {
          character &&
          <>
            <p>Gender: {character.gender}</p>
            <p>Height:  {character.height} inches</p>
            <p>Birth Year: {character.birth_year}</p>
          </>
        }
        <button onClick={close}>Close</button>
      </StyledDetails>
      )
}