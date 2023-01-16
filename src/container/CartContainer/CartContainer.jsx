import { useCartContext } from "../../Context/CartContext";
import InputForm from "../../Components/InputForm/InputForm";
import { Link } from "react-router-dom";
import CartItems from "../../Components/CartItems/CartItems";
import { DeleteItem } from "../../Components/CartItems/CartItems";
const CartContainer = () => {
  const { cartList } = useCartContext();
  let button;

  if (cartList.length === 0) {
    button = (
      <Link className="btn btn-danger fs-3 cursive" to="/home">
        Go Home <br />
        <h1 className="text-muted fs-2 cursive">(Cart Empty)</h1>{" "}
      </Link>
    );
  }
  return (
    <div>
    
<DeleteItem/>

      {cartList.length > 0 ? (
        <>
          
     <CartItems/>
        </>
      ) : (
      ''
      )}

      <center>
        
        <div>{button}</div>
      </center>

      <InputForm />
    </div>
  );
};

export default CartContainer;
