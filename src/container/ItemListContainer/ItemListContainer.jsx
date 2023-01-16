import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../App.css";
import ItemList from "../../Components/Itemlist/Itemlist";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loading from "../../Loading/Loading";
import Footer from "../../Components/Footer/Footer";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const datab = getFirestore();
    const queryCollection = collection(datab, "productos");
    const queryFiltrada = categoryId ? query(queryCollection, where("category", "==", categoryId))
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
  }, [categoryId]);

  return (
    <>
      <div className="body">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {<ItemList products={products} />}
          <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
