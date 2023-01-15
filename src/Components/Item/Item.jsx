import { memo } from "react"
import { Link } from "react-router-dom"


export const Item =memo( ({ product }) => {
 
    return (
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
       
        >   
            <Link to={`/detail/${product.id}`} >
                
                <div className=" card align-items-center mt-5 carta" style={{width:"18rem"}} >
                    <div className="card-header bg-dark text-white w-100 cursive">
                    <span className="fw-bolder">    {`${product.name}`}</span> - <span className="text-muted"> {`${product.category}`}</span>
                    </div>
                    <div className="card-body bg-light align-self-center">
                        <img src={product.foto} alt='' className='fotos' />
                   <div className="text-dark text-center cursive fw-bo" >  $   {product.price}    </div>                                                        
                    </div>
                   
                </div>

            </Link>
    
        </div>  
    )
})

export default Item