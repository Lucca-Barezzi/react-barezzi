import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { addCart, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    addCart({ ...product, cantidad });
    setIsCount(false);
  };
  

  return (
    <div className="row " style={{ width: "100vw" }}>
      <center className="col m-5">
        {" "}
        <div
          className="bg-dark bg-opacity-50 border border-danger border-5 rounded-1"
          style={{ width: "45vw" }}
        >
          <h2 className="text-white">Nombre: {product.name}</h2>
          <img src={product.foto} className="fotos" alt="imágen del producto" />
          <h4 className="text-white descripcion "> {product.description}</h4>
          <h4 className="text-white">Categoría: {product.category}</h4>
          <h4 className="text-white">Precio: $ {product.price}</h4>
          <h4 className="text-white mt-4">Stock: {product.stock}</h4>

          <div>
            <ItemCount stock={product.stock} inintial={1} onAdd={onAdd} />:
            <>



              <Link to="/cart">
                <button className="btn btn-outline-light mt-2 me-3">
                  Ir a Cart
                </button>
              </Link>
              <Link to="/">
                <button className="btn btn-outline-light mt-2">
                  Seguir Comprando
                </button>
              </Link>



            </>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ItemDetail;
