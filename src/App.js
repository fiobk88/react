
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import ItemCount from './components/ItemCount/ItemCount';



function App() {

  const title = "Bienvenidos a SkinGlam!";



  return (
    <div className="App">
      <div>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/detalle" element={<Card />}></Route>
          </Routes>
        </BrowserRouter>

        <ItemCount> </ItemCount>
      </div>
    </div>
  );
}

export default App;
