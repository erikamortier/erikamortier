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

        console.log(producto, cantidad)

       // if(isInCarrito()){ //tengo que sumar sin agregar el producto

            
       // }else {
            //tengo que sumar el prodcuto spread (...carrito)
       // }
    }
   
    const borrarDelCarrito = (id) => { //filter
        carrito.filter(e=> e === id) //aca tengo que asiciarlo con el producto del boton que esta tocando)
    
    }

    const limpiarCarrito = ( ) => {setCarrito ([])}

    const isInCarrito = (id) => {
        //return true o false. buscar con find
        carrito.find(e => e == carrito.id)
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