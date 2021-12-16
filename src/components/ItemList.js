import Item from "./Item"

const ItemList = ({lista}) => {

    let item =  lista.map((e)=>{
        return(
           <li>{e.titulo}</li> )
        
    })



    return (
        <>
        <p>Esto es ItemList</p>
        <Item item={item} />

    </>)

}

export default ItemList