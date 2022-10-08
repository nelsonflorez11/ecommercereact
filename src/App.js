import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import PokeApiContainer from './components/PokeApiContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetalle from './components/ItemDetalle';





function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<PokeApiContainer/>} />
          <Route path={'/detalle'} element={<ItemDetalle/>} />
          
        </Routes>
        <ItemListContainer greeting='Elije tu personaje'/>    
         
      </BrowserRouter>
  
    </>

  );
}

export default App;
