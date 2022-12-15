import { useState } from 'react'
import './App.css'
import NavBar from './assets/componentes/NavBar/NavBar';
import Titulo from './assets/componentes/Titulo/Titulo';
import ItemListContainer from './assets/containers/ItemListContainer/ItemListContainer';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import itemDetailContainer from './assets/containers/itemDetailContainer/itemDetailContainer';





function App() {
 

  return (
   <div>


<NavBar/>
<Titulo />
<ItemListContainer/>


  </div>
  )
}

export default App
