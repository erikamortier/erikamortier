import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const onAdd =(a)=>{
    carrito.push()
  }

const initial = 0

let stock = 5

let carrito = []






    


const ItemListContainer = ({nombre, apellidos, productos}) => {

    const [lista, setLista] = useState([])

    const {id} = useParams()

    useEffect(()=>{





        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            }, 2000)
        })
        promesa.then((productos)=>{
            console.log("se cargo la promesa")
            setLista(productos)
            
        })
        .catch(()=>{
            console.log("todo mal")
        })
    })

    return ( 
        <>

    <h1>Hola {nombre} {apellidos[1]}</h1>
    <ItemCount onAdd={onAdd} initial={initial} stock={stock} carrito={carrito} />
    <ItemList lista={lista}  />
    </>
    )
}





export default ItemListContainer