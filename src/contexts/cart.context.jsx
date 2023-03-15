import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import productsService from './../services/products.services'
import cartService from "../services/cart.services"


const CartContext = createContext()

function CartProviderWrapper(props) {

    const [cartData, setCartData] = useState({

        buy: [],
        totalPrice: 0
    })



    const navigate = useNavigate()

    const addToCart = () => {

        console.log('----------QUIEN LLEGA', cartData)

        cartService
            .createCart(cartData)
            .then((cart) => {
                console.log("quiebnbnn llega", cart)
                // navigate('/')
            })
            .catch(err => console.log(err))

    }

    const getProducts = () => {

        // cartData.buy.map(elm => { elm })



        productsService
            .getOneProduct()
            .then((response) => console.log(response))
            .catch(err => console.log(err))
    }







    return (
        <CartContext.Provider value={{ setCartData, addToCart, cartData }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }
