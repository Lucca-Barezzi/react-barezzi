import { useState } from 'react'
import './App.css'
import NavBar from './assets/componentes/NavBar/NavBar';
import Titulo from './assets/componentes/Titulo/Titulo';
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';






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
