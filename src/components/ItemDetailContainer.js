import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const { id } = useParams()

    return (  
        <p>Detalle: {id}</p>
        
    );
  };

  export default ItemDetailContainer;