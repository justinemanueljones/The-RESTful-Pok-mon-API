import React, { useState , useEffect } from 'react';  //useState so we can set state //useEffect so we can use axios 
import axios from 'axios'                           //import axios so we get our get/fetch request from API
import PokemonList from './components/pokemonList'
import Page from './components/page' 
//imports

function App() {
  const [pokemon, setPokemon] = useState([]) //set state to empty array of with pokemon to test
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon") //sets current page
  const [nextPageUrl, setNextPageUrl] = useState() //sets next page
  const [prevPageUrl, setPrevPageUrl] = useState() //sets previous page 


  useEffect(() => {
    
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c) //cancel any old request if old data finshes before new request
    }).then(res => {
      setNextPageUrl(res.data.next)                      //we take the next variable from the API
      setPrevPageUrl(res.data.previous)                 //we take the previous variable from the API
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])                              //eveytime we change our current page url we want to re-fetch

  function gotoNextPage() {                      //set function
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {                  //set function
    setCurrentPageUrl(prevPageUrl)
  }

  return ( 
    <> {/* //react frament so we can render 2 objects */}
    <img style={{marginLeft: '29rem'}}
    src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokiapi"></img>
      
      <PokemonList pokemon={pokemon} />    {/* calling list component- props of all pokemon */}
      <Page                                
        gotoNextPage={nextPageUrl ? gotoNextPage : null}      /* if statment check */
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
