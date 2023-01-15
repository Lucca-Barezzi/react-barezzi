import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../App.css";
import ItemList from "../../Components/Itemlist/Itemlist";
import { collection,getDocs,getFirestore,query,where,} from "firebase/firestore";
import Loading from "../../Loading/Loading";
import Footer from "../../Components/Footer/Footer";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const datab = getFirestore();
    const queryCollection = collection(datab, "productos");
    const queryFiltrada = categoriaId
      ? query(queryCollection, where("category", "==", categoriaId))
      : queryCollection;
    getDocs(queryFiltrada)
      .then((respuesta) =>
        setProducts(
          respuesta.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  
  return (
    <>
      <div className="body">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {<ItemList products={products} />}
            <Footer />{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
