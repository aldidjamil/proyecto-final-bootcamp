import { useContext } from "react"
import { Link } from "react-router-dom"
import productsService from "../../services/products.services"
import { AuthContext } from "../../contexts/auth.context"
import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './ProductCard.css'
import { CartContext } from "../../contexts/cart.context"




const ProductCard = ({ title, description, imageUrl, format, _id, owner, price }) => {

    const { user } = useContext(AuthContext)

    // const productQuantity = cart.getProductQuantity(_id)



    const navigate = useNavigate()

    const deleteProduct = (product_id) => {
        productsService
            .deleteProduct(product_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <Card className='mb-5 productCard'>
            <Card.Body>
                <img src={imageUrl} alt={_id} />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{format} Gramos</p>
                <p>{price} Euros</p>
                {user && user.role === 'ADMIN' &&
                    <Link to={`/products/edit/${_id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                }
                {user && user.role === 'ADMIN' &&
                    <Button variant="outline-danger" onClick={() => deleteProduct(_id)}>Eliminar</Button>
                }
                {user._id === owner &&
                    <Button variant="outline-danger" onClick={() => deleteProduct(_id)}>Eliminar OWNER</Button>
                }
                <Button onClick={() => navigate(-1)} variant="outline-dark">Volver</Button>
                {/* {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(_id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(_id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(_id)} className="my-2">Eliminar del carrito</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(_id)}>Añadir al carrito</Button>
                } */}
            </Card.Body>
        </Card>


    )
}

export default ProductCard