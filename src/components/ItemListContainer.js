import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const onAdd =(a)=>{
    carrito.push()
  }

const initial = 0

let stock = 5

let carrito = []


let productos = [
    {
      "id": "producto1",
      "titulo": "placa de video",
      "descripcion ": "amd 6700xt",
      "precio": 1200
    },
    {"id": "producto2",
    "titulo": "microprocesador",
    "descripcion ": "intelg4560",
    "precio": 100
    },
    {"id": "producto3",
    "titulo": "memoria ram",
    "descripcion ": "8gb ddr4",
    "precio": 25}]


    


const ItemListContainer = ({nombre, apellidos}) => {

    const [lista, setLista] = useState([])

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