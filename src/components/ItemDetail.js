const ItemDetail = ({lista} ) => {

    return (
        <>
        <p>Esto es ItemDetail</p>


<ul>
         {lista.map((e)=>{
        return(<>
        <li>  {e.id} </li>
        <li>  {e.descripcion} </li>
        <li>  {e.precio} </li> </>)
        
    })}
   
</ul>




    </>)

}

export default ItemDetail