import Item from "./Item"

const ItemList = ({lista}) => {


    
    
    return (
        <>
        <p>Esto es ItemList</p>
        
        <div> {lista.map((e)=>{
            return(
               < Item titulo={e.titulo} id={e.id} precio={e.precio} /> )
            
        })}</div>
</>

    )

}

export default ItemList