import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [rickan, setRickandmor] = useState([])

    useEffect(() => {
        getRickandmorty()  
      }, [])

      const getRickandmorty = async () => {
        const URL = 'https://rickandmortyapi.com/api/character/' + id
        const response = await axios.get(URL)
        setRickandmor( response.data )
        console.log(response.data)
      }   

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={rickan.image} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{rickan.name}</h2>            
            <p>Gender: {rickan.gender}</p>
            <p>Species: {rickan.species}</p>
            <p>Status: {rickan.status}</p>
            <p>Create: {rickan.created}</p>           
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
             
      
    );
  };

  export default ItemDetailContainer;