import React from 'react'  //rfc creates react function component es7extention

export default function pokemonList({ pokemon }) { //passing in props here
    const style = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '3px solid gray',
          margin:  '1rem',
          padding: '1rem',
          color: '#FFCA1B',
          backgroundColor: '#3861A8',
    }
//styles
    return (
        <div>
            {pokemon.map(name =>(
                <div style={style} key={name}>{name}</div> //we need a key for our top level element that loops
            ))}
        </div>
    )
}
