import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail"



let detalles = [
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

    const [lista, setLista] = useState([])

    useEffect(()=>{
        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(detalles)
            }, 2000)
        })
        promesa.then((detalles)=>{
            console.log("se cargo la promesa")
            setLista(detalles)
            
        })
        .catch(()=>{
            console.log("todo mal")
        })
    })


const ItemDetailContainer = () => {
    return (
        <>
        <div>ItemDetailContainer</div>
        <ItemDetail lista={lista} />
        </>

    )

}

export default ItemDetailContainer