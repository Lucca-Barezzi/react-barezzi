import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (producto) => {
    const idx = cartList.findIndex((product) => product.id === producto.id);

    if (idx === -1) {
      setCartList([...cartList, producto]);
    } else {
      cartList[idx].cantidad += producto.cantidad;

      setCartList([...cartList]);
    }
  };

  const deleteCart = () => setCartList([]);

  const finalPrice = () =>
    cartList.reduce(
      (count, product) => (count += product.cantidad * product.price),
      0
    );

  const amountCartWidget = () =>
    cartList.reduce((count, product) => (count += product.cantidad), 0);

  const deleteItem = (id) =>
    setCartList(cartList.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        deleteCart,
        amountCartWidget,
        finalPrice,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
