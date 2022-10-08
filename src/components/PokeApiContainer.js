import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RmCard = ( {id,name,image,location} ) => {
  return(
   
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Visto por primera vez en:</p>
          <p>{location.name}</p>
          <div className="card-actions justify-end">
            <Link to={`/ItemDetalle/${id}`} button className="btn btn-primary">Agregar</Link>
          </div>
        </div>   
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
