import itemCount from "../../componentes/itemCount"
import gFetch from "../../helpers/gFetch"
import { useState, useEffect } from "react"

const ItemListContainer = ({ saludo }) => {
  const [ products, setProducts ] =   useState([])
  const [ loading, setLoading ] = useState(true) 
  
  useEffect(()=>{
      gFetch() // simulación de fetch para consultar una api
      .then( resp =>  setProducts(resp) )   // en esta linea cambia el estado 
      .catch( err => console.log( err ) )
      .finally(()=> setLoading(false))
      
  }, [])

  


  console.log('productos: ',products)   


return (
  <>
      <h2>{ saludo }</h2> 
     

      { loading ? 
          <h3 className="carga">Cargando productos ......</h3> 
              :
          products.map( product =>    <div        
                                          style={{ marginLeft: 100}}
                                          className='ola '
                                          key={product.id}
                                      >    
                                          
                                          <div className="card w-70 mt-4 " >
                                              <div className="card-header">
                                                  {`${product.name} - ${product.categoria}`}
                                              </div>
                                              <div className="card-body">
                                                  <img src={product.foto} alt='' className='w-50 ' />
                                                  {product.price}                                                            
                                              </div>
                                      
                                              <div className="card-footer">                                                        
                                                  <button className="btn btn-outline-primary btn-block">
                                                      detalle del producto
                                                  </button>
                                              </div>
                                          </div>
                                                          
                                          
                                  </div>  
              ) }

      
  </>
)


          }



export default ItemListContainer

