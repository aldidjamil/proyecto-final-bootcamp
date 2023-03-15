import { useState, useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import productsService from "../../services/products.services"


const ShoppingCart = () => {

    const { cartData, addToCart, setCartData } = useContext(CartContext)

    console.log(cartData)


    return (
        <>




            <p>{cartData.buy.map(elm => <li key={elm}>  {elm.product_id}</li>)}</p>

            <p>{cartData.buy.map(elm => <li key={elm}>  {elm.quantity}</li>)}</p>





        </>

    )
}

export default ShoppingCart
