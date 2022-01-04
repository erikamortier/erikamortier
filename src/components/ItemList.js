import Item from "./Item"

const ItemList = ({lista}) => {


    
    
    return (
        
        
        <div> {lista.map((e)=>{
            return(
               < Item titulo={e.titulo} id={e.id} precio={e.precio} /> )
            
        })}
        </div>


    )

}

export default ItemList