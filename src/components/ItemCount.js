import { useState } from "react"

const ItemCount = ({onAdd, stock, initial, carrito}) =>  {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
        setContador(contador + 1)
      }
      }
   
      const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
      }

      const reset = () => {
        carrito = []
      }



    return(
        <>
            <p>Contador actual: {contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={onAdd(contador)}>Agregar al carrito</button>
    <button onClick={reset}>Borrar carrito</button>
    <p>Carrito: {carrito}</p>

        </>

    )
}

export default ItemCount