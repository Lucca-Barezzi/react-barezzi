import { useState } from 'react'


const ItemListContainer = () => {

const [contador,setearContador] =useState(0)

const agregarCarrito = ()=>{
  setearContador (contador + 1)
}

const quitarCarrito = ()=>{
 setearContador ( contador - 1)
 
 
}



  return (
    <div className="item">
        Componentes de la pagina
        {contador}
        <button onClick={agregarCarrito}>+</button>
        <button onClick={quitarCarrito}>-</button></div>
  )
}

export default ItemListContainer

