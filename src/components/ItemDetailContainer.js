import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from "./ItemDetail"





const ItemDetailContainer = ({productos} ) => {



        const [lista, setLista] = useState([])

        const {id} = useParams()

        useEffect(()=>{
            const promesa = new Promise ((res,rej)=>{
                setTimeout(()=>{
                    res(`productos.${id}`)
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
        <div>ItemDetailContainer</div>
        <ItemDetail lista={lista} />
        </>

    )

}

export default ItemDetailContainer