import ItemCount from "./ItemCount"

const ItemDetail = ({lista} ) => {

    const onAdd =(a)=>{
        carrito.push()
      }
    
    const initial = 0
    
    let stock = lista.map((e)=>{
        return(
        e.stock )
        
    })
    
    let carrito = [] 

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
    <ItemCount onAdd={onAdd} initial={initial} stock={stock} carrito={carrito} />
</>
)

}

export default ItemDetail