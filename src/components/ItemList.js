import Item from "./Item"

const ItemList = ({productos}) => {

    let item =  productos.map((e)=>{
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