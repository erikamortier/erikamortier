const ItemDetail = ({lista} ) => {

    return (
        <>
        <p>Esto es ItemDetail</p>


<ul>
         {lista.map((e)=>{
        return(
          <li>  {e.descripcion} </li> )
        
    })}
   
</ul>




    </>)

}

export default ItemDetail