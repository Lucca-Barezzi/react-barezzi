import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./container/CartContainer/CartContainer";
import { CartContextProvider } from "./Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <CartContextProvider>
      <div className="fondo">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoriaId" element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productoId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} /> 
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
         
        </BrowserRouter>
      </div>
    </CartContextProvider>
  
  );
}

export default App;
