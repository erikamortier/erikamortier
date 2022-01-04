import { Link } from "react-router-dom"

const Item = ({titulo, id, precio}) => {

    return (
        <>
        <ul><li> {titulo} </li> 
        <li> {precio} </li> </ul>
        <Link to={`/item-detail/${id}`}><button>Ver Detalle</button></Link> 
        
        </>
    )


}

export default Item