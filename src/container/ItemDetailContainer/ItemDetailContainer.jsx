import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import Loading from "../../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const datab = getFirestore();
    const queryDoc = doc(datab, "productos", productId); //No le cambie el nombre de productos a products para no tener que cargar todo de vuelta en firebase :)

    getDoc(queryDoc)
      .then((respuesta) =>
        setProduct({ id: respuesta.id, ...respuesta.data() })
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loading /> : <ItemDetail product={product} />;
};
export default ItemDetailContainer;
