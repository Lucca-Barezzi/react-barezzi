import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './assets/componentes/NavBar/NavBar'
import ItemListContainer from './assets/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './assets/containers/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';






function App() { 

    return (

        <div 
          
        >
            <BrowserRouter>  
                <NavBar  
      
                />   
                <Routes >
                    <Route path='/' element={ <ItemListContainer  /> } />
                    <Route path='/categoria/:categoriaId' element={ <ItemListContainer  /> } />
                     <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                     <Route path='/cart' element={<CartContainer />} />
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>          
                
            </BrowserRouter>       

        </div>
    )
}

export default App



