import { Link } from "react-router-dom"

const Item = ({titulo, lista}) => {

    return (
        <>
        <ul><li> {titulo} </li> </ul>
        <Link to={"/item-detail/:id"}><button>Ver Detalle</button></Link> 
        
        </>
    )


}

export default Item