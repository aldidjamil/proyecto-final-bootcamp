import { useState, useContext, useEffect, useNavigate } from "react"
import { CartContext } from "../../contexts/cart.context"
import productsService from "../../services/products.services"
import cartService from "../../services/cart.services"
import { AuthContext, setUser, AuthProviderWrapper } from "../../contexts/auth.context"
import authService from "../../services/auth.services"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ShoppingCart.css'

const ShoppingCart = () => {

    useEffect(() => {
        console.log({ cartData })
    })

    const { cartData, addToCart, setCartData, deleteCart, fireFinalActions } = useContext(CartContext)
    const { user, setUser, refreshToken } = useContext(AuthContext)
    // const navigate = useNavigate()

    useEffect(() => {
        user && loadUser(user._id)
    }, [])

    useEffect(() => {
        user && addToCart().then(() => loadCart()).catch(err => console.log(err))
    }, [user])

    const loadUser = (user_id) => {
        authService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUser(data)
                // refreshToken()
            })
            .catch(err => console.log(err))
    }

    const loadCart = () => {
        authService
            .getOneUser(user._id)
            .then(res => {
                loadCartData(res.data.cart)
            })
            .catch(err => console.log(err))
    }


    const loadCartData = (cartid) => {
        cartService
            .getCart(cartid)
            .then(({ data }) => {
                setCartData(data)
            })
            .catch((err) => console.log(err));
    }


    return (

        <>
            <h4>SHOPPING CART</h4>
            {cartData &&
                <>
                    {cartData?.buy?.map(elm => (
                        <div key={elm.product._id}>
                            <p>Producto: {elm.product.title}</p>
                            <p>Cantidad: {elm.quantity}</p>
                            <p>Precio: {elm.product.price} Euros</p>
                        </div>
                    ))}
                    <p> <b>Precio total de su compra:</b> {cartData.totalPrice} Euros</p>
                </>
            }
            <div className="mb-2 ml-2 buttonsCart">
                <Button variant="outline-danger" onClick={() => deleteCart()}> Eliminar el Carrito </Button>
                <Link to="/comprarealizada">
                    <Button variant="outline-dark" onClick={() => fireFinalActions()}> Realizar Compra</Button>
                </Link>



            </div>
        </>
    )
}

export default ShoppingCart