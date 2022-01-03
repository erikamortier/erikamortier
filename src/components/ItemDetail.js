const ItemDetail = ({lista} ) => {

    return (
    

        <ul>
                {lista.map((e)=>{
                return(<>
                <li>  {e.id} </li>
                <li>  {e.descripcion} </li>
                <li>  {e.precio} </li> </>)
                
            })}
        
        </ul>

)

}

export default ItemDetail