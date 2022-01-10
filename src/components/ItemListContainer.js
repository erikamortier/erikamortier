import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




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
    <ItemList lista={lista}  />
    </>
    )
}





export default ItemListContainer