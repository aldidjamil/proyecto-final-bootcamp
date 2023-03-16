import { createContext, useEffect, useState, useContext } from "react"
import cartService from "../services/cart.services"

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [cartData, setCartData] = useState({
        buy: [],
        totalPrice: 0
    })

    const [show, setShow] = useState(false)

    const fireFinalActions = () => {
        setShow(false)
    }

    const addToCart = () => cartService.createCart(cartData)

    useEffect(() => {
        setCartData(cartData)
        console.log(cartData)
    }, [])

    const deleteCart = () => {
        cartService
            .deleteCart(cartData._id)
            .then(() => {
                setCartData({ buy: [], totalPrice: 0 })
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }


    return (
        <CartContext.Provider value={{ setCartData, addToCart, cartData, deleteCart, fireFinalActions, show, setShow }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }