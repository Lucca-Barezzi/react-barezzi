import { useCartContext } from "../../Context/CartContext";
import InputForm from "../../Components/InputForm/InputForm";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, deleteCart, finalPrice, deleteItem } = useCartContext();
  let button;

  if (cartList.length === 0) {
    button = <Link className="btn btn-danger fs-3 cursive" to='/home'>Volver al Home <br /><h1 className="text-muted fs-2 cursive">(Carrito Vacio)</h1> </Link>;
  }
  return (
    <div>
      {cartList.map((product) => (
        <li className="text-white" key={product.id}>
          <img src={product.foto} alt="" className="cartFoto"></img>
          {product.name} - Amount: {product.cantidad}
          <button
            className="btn btn-light"
            onClick={() => deleteItem(product.id)}
          >
            X
          </button>
        </li>
      ))}

      {cartList.lenght > 0 && (
        <>
          {" "}
          <h1 className="text-white">Total Price:$ {finalPrice()}</h1>
          <br></br>
          <button className="btn btn-dark" onClick={deleteCart}>
            Delete Cart
          </button>
        </>
      )}

      <center> <div >{button}
      </div>   </center>

      <InputForm />
    </div>
  );
};

export default CartContainer;
