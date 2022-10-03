import { useEffect, useState } from "react";

export const RmCard = ( {name,image} ) => {
  return(
    <div>
      <div>{name}</div>
      <div><img src={image}></img></div>      
    </div>

  )
}


const PokeApiContainer = () => {


  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon()  
  }, [])
  
  const getPokemon = () => {
    const URL = 'https://rickandmortyapi.com/api/character'
    fetch( URL )
      .then( response => response.json())
        .then( data =>{
          console.log(data.results)
          setPokemon(data.results)
        })

  }

  return (
    <div>     
      { pokemon.map( p => <RmCard key={p.id} {...p} />) }      
    </div>
 

    


  );
};
export default PokeApiContainer;
