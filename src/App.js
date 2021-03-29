import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (<> 
          <NavBar />
          <h2>Listo</h2>
          <ItemListContainer greeting="Lo más nuevo de la música electrónica" />
          </> 

    

  );
}

export default App;
