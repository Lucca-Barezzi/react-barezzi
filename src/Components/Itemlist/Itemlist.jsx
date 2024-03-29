import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ItemList;
