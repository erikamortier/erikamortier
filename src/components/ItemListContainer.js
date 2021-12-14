import ItemCount from './ItemCount';

const onAdd =(a)=>{
    carrito.push()
  }

const initial = 0

let stock = 5

let carrito = []

const ItemListContainer = ({nombre, apellidos}) => {
    return ( 
        <>
    <h1>Hola {nombre} {apellidos[1]}</h1>
    <ItemCount onAdd={onAdd} initial={initial} stock={stock} carrito={carrito} />
    </>
    )
}





export default ItemListContainer