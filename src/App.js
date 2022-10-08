import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryContainer from './components/CategoryContainer';





function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path={'/category/:categoryid'} element={<CategoryContainer/>} />
          <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
          
        </Routes>
     
         
      </BrowserRouter>
  
    </>

  );
}

export default App;
