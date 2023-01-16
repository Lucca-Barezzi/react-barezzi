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
      <div className="backgroundImg">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
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
