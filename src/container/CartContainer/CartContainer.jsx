
import { useCartContext } from "../../Context/CartContext"
import InputForm from "../../Components/InputForm/InputForm"
import { Link } from "react-router-dom"


const CartContainer = () => {

  const { cartList, deleteCart,finalPrice, deleteItem } = useCartContext()
console.log(cartList)
  return (
    <div>
        {cartList.map(product => <li className="text-white" key={product.id}>
            <img src={product.foto} alt="" className="cartFoto"></img>
            {product.name} - Amount: {product.cantidad}<button
                className="btn btn-light"
                onClick={() => deleteItem(product.id)}
            >X</button></li>)}

     {cartList.lenght > 0 && (
       <>        <h1 className="text-white">Total Price:$ {finalPrice()}</h1>
                 <br></br>
                   <button
            className="btn btn-dark"
            onClick={deleteCart}
                >Delete Cart</button>
        </>          
        )}

{cartList.lenght === 0 &&( <Link className="text-danger" to='/'>ir al inicio</Link> )}
        
        <InputForm />
      
          

    </div>
)

}

export default CartContainer

