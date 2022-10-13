import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const RmCard = ( {id,name,image,location} ) => {
  return(
   
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Visto por primera vez en:</p>
          <p>{location.name}</p>
          <div className="card-actions justify-end">
            <Link to={`/item/${id}`} button="true" className="btn btn-primary">Agregar</Link>
          </div>
        </div>   
    </div>

  )
}

const ItemListContainer = () => {

    const { species } = useParams()

  const [rickandmorty, setRickandmorty] = useState([])

  useEffect(() => {
    getRickandmorty()  
  }, [])
  
  const getRickandmorty = () => {
    const URL = 'https://rickandmortyapi.com/api/character' + species
    fetch( URL )
      .then( response => response.json())
        .then( data =>{
          console.log(data.results)
          setRickandmorty(data.results)
        })
  }

  return (
    <div>     
      { rickandmorty.map( p => <RmCard key={p.id} {...p} />) }      
    </div>
  );
};
export default ItemListContainer;
