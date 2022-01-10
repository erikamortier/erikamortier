import { createContext, useContext, useState } from "react";

const contexto = createContext ()

export const {Provider } = contexto 

export const useContexto = () => {
    return useContext(contexto)
}


export const CustomProvider = ({children}) => {
    
    //esto es para mostrar en el widget la cantidad total de elementos que tengo en el carrito
    const [cantidadTotal, setCantidadTotal] = useState()
    
    //carrito, para ver todos los elementos del carrito
    const [carrito, setCarrito] = useState()
    
    //agregaralcarrito
    const agregarAlCarrito = (producto, cantidad) => {
        if(isInCarrito()){ //tengo que sumar sin agregar el producto
            
        }else {
            //tengo que sumar el prodcuto
        }
    }
   
    const borrarDelCarrito = (id) => {
    
    }

    const limpiarCarrito = ( ) => {setCarrito ([])}

    const isInCarrito = (id) => {
        //return true o false
    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider