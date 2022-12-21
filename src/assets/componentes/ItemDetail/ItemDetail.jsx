import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => { 


console.log(product)
    const onAdd= (cantidad) => {
       console.log (`Cantidad de productos seleccionados: ${cantidad}`)


   
    return (
        <div className="row">
            <div><h2>ola</h2></div>
            { <div className="col m-5">
                <h2>Nombre: {product.name}</h2>
                <img src={product.foto} className='fotos' alt="imágen del producto" />
                <h4>Categoría: {product.categoria}</h4>
                <h4>Precio: {product.price}</h4>
            </div> }
            <div className="col">
                <ItemCount 
                    stock={10}
                    inintial={1}
                    onAdd={onAdd}
                />
                
            </div>

    

        </div>
    )
    }
}
    export default ItemDetail