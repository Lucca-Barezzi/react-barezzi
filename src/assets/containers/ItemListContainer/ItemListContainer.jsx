import {useParams} from 'react-router-dom'
import gFetch from "../../helpers/gFetch"
import { useState, useEffect } from "react"
import  "../../../App.css"
import ItemList from "../../componentes/Itemlist/Itemlist"
import CartContainer from '../CartContainer/CartContainer'
import ItemCount from '../../componentes/ItemCount/ItemCount'


const ItemListContainer = () => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            gFetch() 
            .then( resp =>  setProducts(resp.filter(productos => productos.categoria === categoriaId )) ) 
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch() 
            .then( resp =>  setProducts(resp) )   
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))            
        }   
    }, [categoriaId])


   
  return (
    <>
        <h2 className='text-center fw-bold fs-1 bg-dark text-white'>MI TIENDA</h2> 
  

        { loading ? 
            <h2 className='text-center'>Cargando productos ...</h2> 
                :
      

   <div> 
      
   {<ItemList products={products}/>}
   <ItemCount/> 
        

</div> 
}
</>
)
 }       


    
  





        

  
export default ItemListContainer

