import { useEffect, useState, useContext } from "react"
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import productsService from "../../services/products.services"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './SingleProductDetails.css'
import { CartContext } from "../../contexts/cart.context";

const SingleProductDetails = () => {

    const [product, setProduct] = useState({
        title: "",
        imageUrl: "",
        description: "",
        owner: ""
    })

    const [quantity, setQuantity] = useState(0)

    const navigate = useNavigate()
    const { product_id } = useParams()
    const { cartData, addToCart, setCartData } = useContext(CartContext)

    useEffect(() => {
        loadProductData()
    }, [])

    const loadProductData = () => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => {
                setProduct(data)
            })
            .catch(err => console.log(err))
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        setQuantity(quantity - 1);
    }

    const handleAddToCart = () => {
        const buyCopy = [...cartData.buy]
        buyCopy.push({ product: product_id, quantity })
        setCartData({ ...cartData, buy: buyCopy })
        setQuantity(0)
        // addToCart()
    }




    return (
        <>

            <Card className="text-center my-5 mx-5 productCard card">
                <Card.Header> <h1>{product.title}</h1></Card.Header>
                <Card.Body>
                    <Container className="textonrecipe">
                        <Card.Title> <img className="productimagedetails" src={product.imageUrl} alt="" />  </Card.Title>
                        <Card.Text className="mx-5">
                            <span> Descripción del producto: {product.description} </span>
                            <span> Precio: {product.price}</span>
                            <Link>
                                {/* <div> */}
                                <span>{quantity} Productos</span>
                                <Button onClick={incrementQuantity}>+</Button>
                                <Button onClick={decrementQuantity}>-</Button>
                                {/* </div> */}
                                <Button onClick={handleAddToCart} variant="dark">añadir al Carrito</Button>

                            </Link>

                        </Card.Text>
                        <Link>
                            <Button onClick={() => navigate(0)} variant="dark">Volver atrás</Button>
                        </Link>
                    </Container>
                </Card.Body>
            </Card>


        </>
    )
}

export default SingleProductDetails