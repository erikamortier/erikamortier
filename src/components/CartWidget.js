// Este va a ser el icono del carrito
import Cart from "./Cart"
import { useContexto } from "./CartContext"


const CartWidget = () => {
    const { carrito } = useContexto()

    return (<>



    <span class="material-icons">
        star_rate
    </span>
    <Cart />
    </>
    )
}

export default CartWidget
