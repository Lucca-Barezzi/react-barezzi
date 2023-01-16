import { useState } from "react"


export const ItemCount = ( { stock=5, inital=1 ,onAdd }) => {
    const [ count, setCount ] = useState(inital) 


      const handleCount = () => {
         if(count < stock) {
             
            setCount(count + 1)            
        } 
    }
    const restar = () => {if(count > inital) setCount(count - 1)}            
        
    const handleOnAdd = ({}) => onAdd(count)
  

      
    return (
   
     <center className="mt-4 border border-1 border-danger p-2 rounded-4 w-50">
            <button 
                className="btn btn-outline-danger" 
                onClick={handleCount} 
            > 
                + 
            </button>     
            <label className="text-white" htmlFor="">{count}</label>
        
            <button 
                className="btn btn-outline-danger" 
                onClick={restar} 
            > 
                - 
            </button> 
            <br />   

                  <button 
                className="btn btn-outline-danger" 
                onClick={ handleOnAdd  } 
            > 
                Add to Cart 
            </button>     
            <br></br>
       </center>
    
      

    )}
