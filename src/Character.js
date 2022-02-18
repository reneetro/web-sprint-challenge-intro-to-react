import React from 'react'
import styled from 'styled-components'

const Character = props => {

    const StyledCharacter = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 2px solid white;

    p {
        font-family: 'Andale Mono', monospace;
        font-weight: bold;
        font-size: 1.8rem;
        width: 70%;
        margin-right: 0;
        }

    button {
        height: 2rem;
        align-self: center;
     &:hover{
        transform: scale(1.1);
    }
}
    `
    
    
    return (
        <StyledCharacter className = 'character-wrap'>
            <p>{props.info.name}</p>
            <button onClick ={()=> props.openDetails(props.info.created) }>+</button>
        </StyledCharacter>
    )
}

export default Character;