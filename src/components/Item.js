import { Link } from "react-router-dom"

const Item = ({lista}) => {

    return (
        <>
        <ul><li> {lista.titulo} </li> 
        <li> {lista.precio} </li> </ul>
        <Link to={`/item-detail/${lista.id}`}><button>Ver Detalle</button></Link> 
        
        </>
    )


}

export default Item