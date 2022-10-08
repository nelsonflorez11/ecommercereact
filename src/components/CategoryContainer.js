import { useParams } from "react-router-dom";

export const CategoryContainer = () => {

    const { species } = useParams()

    return (  
        <p>Categoria: {species}</p>
        
    );
  };

  export default CategoryContainer;