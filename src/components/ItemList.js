import Item from "./Item"

const ItemList = ({lista}) => {

  



    return (
        <>
        <p>Esto es ItemList</p>


<div>
         {lista.map((e)=>{
        return(
           < Item titulo={e.titulo} /> )
        
    })}
   
</div>




    </>)

}

export default ItemList