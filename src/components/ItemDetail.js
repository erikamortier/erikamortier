import ItemCount from "./ItemCount"
import { useContexto } from "./CartContext"


const ItemDetail = ({lista} ) => {

    const {limpiarCarrito, agregarAlCarrito} = useContexto()


    let carrito = [] 

    const onAdd =(contador, lista)=>{
        agregarAlCarrito(contador, lista)
      }
    
    const initial = 0
    
    let stock = lista.map((e)=>{
        return(
        e.stock )
        
    })
    

    const producto = lista.map((e)=>{
        return (
            e.titulo
        )
    })

    return (<>
    

        <ul>
                {lista.map((e)=>{
                return(<>
                <h1> {e.titulo} </h1>
                <img src={e.imagen} />
                <li>  {e.descripcion} </li>
                <li>  {e.precio} </li> </>)
                
            })}
        
        </ul>
    <ItemCount onAdd={onAdd} initial={initial} stock={stock} carrito={carrito} producto={producto} />
</>
)

}

export default ItemDetail