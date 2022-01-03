import Item from "./Item"

const ItemList = ({lista}) => {

  



    return (
        <>
        <p>Esto es ItemList</p>


<div>
         {lista.map((e)=>{
        return(
           < Item lista={e} /> )
        
    })}
   
</div>




    </>)

}

export default ItemList