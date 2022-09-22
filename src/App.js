import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';




function App() {
  return (
    
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting='Saludos desde el curso de React'></ItemListContainer>
    <CartWidget></CartWidget>
    </>
    
    
   
  );
}

export default App;
