import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import PokeApiContainer from './components/PokeApiContainer';





function App() {
  return (
    
    <>
    <NavBar/>
    <ItemListContainer greeting='Saludos desde el curso de React'/>    
    <PokeApiContainer/>
    
    
    </>
    
    
   
  );
}

export default App;
