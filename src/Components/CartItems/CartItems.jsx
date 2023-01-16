import { useCartContext } from "../../Context/CartContext";

 const CartItems = () => {
    const {  deleteCart, finalPrice  } = useCartContext();
  return (
    <div>
    <h1 className="text-white">Total Price:$ {finalPrice()}</h1>
    <br></br>
    <button className="btn btn-dark" onClick={deleteCart}>
      Delete Cart
    </button>
    </div>
  )
}

export const DeleteItem =() => {
    const { cartList,  deleteItem } = useCartContext();
return(
<div>
    {cartList.map((product) => (
        <li className="text-white" key={product.id}>
          <img src={product.foto} alt="" className="cartFoto"></img>
          {product.name} - Amount: {product.amount}
          <button
            className="btn btn-light"
            onClick={() => deleteItem(product.id)}
          >
            X
          </button>
        </li>
      ))}
      </div>
)
}
export default CartItems