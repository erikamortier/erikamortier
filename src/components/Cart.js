import { useContexto } from "./CartContext"

const Cart = () => {
    const { cantidad_total } = useContexto()
    return (


    <h2>Soy el carrito</h2>
)}

export default Cart