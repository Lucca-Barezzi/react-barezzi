import { useState } from "react"


export const ItemCount = ( { stock = 5, inital=1 ,onAdd }) => {
    const [ count, setCount ] = useState(inital) 
    const [booleano, setBooleano] = useState(true)
    const handleCount = () => {
         if(count < stock) {
             console.log(count)
            setCount(count + 1)            
        } 
    }
    const restar = () => {if(count > inital) setCount(count - 1)}            
        
    

   
    
    return (
        <center className="mt-5 container-sm border border-1 border-primary p-3 rounded" style={{width:"10rem"}}>
            <button 
                className="btn btn-outline-primary" 
                onClick={handleCount} 
            > 
                + 
            </button>     
            <label htmlFor="">{count}</label>
        
            <button 
                className="btn btn-outline-primary" 
                onClick={restar} 
            > 
                - 
            </button> 
            <br />    
            <button 
                className="btn btn-outline-primary" 
         
            > 
                agregar al carrito 
            </button>     
            <br></br>
            
    </center>
    )
}

export default ItemCount