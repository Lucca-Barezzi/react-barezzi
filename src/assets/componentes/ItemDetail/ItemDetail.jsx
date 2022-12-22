import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => { 


console.log(product)
    const onAdd= (cantidad) => {
       console.log (`Cantidad de productos seleccionados: ${cantidad}`)

    }
   
    return (
        <div className="row">
      
      <center className="col m-5 ">   <div className="bg-light rounded" style={{width:"40vw"}}> 
                <h2>Nombre: {product.name}</h2>
                <img src={product.foto} className='fotos' alt="imágen del producto" />
                <h4>Categoría: {product.categoria}</h4>
                <h4>Precio: {product.price}</h4>
              
                
            <div >
                <ItemCount 
                
                    stock={10}
                    inintial={1}
                    onAdd={onAdd}
                    
                />
                </div>
                
            </div>
            </center>
    

        </div>
    )
    
}
    export default ItemDetail