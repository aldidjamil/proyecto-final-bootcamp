import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import productsService from "../../services/products.services"
import { AuthContext } from "../../contexts/auth.context"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({ title, description, imageUrl, format, _id, owner, price }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const deleteProduct = (product_id) => {
        productsService
            .deleteProduct(product_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <Card className='mb-5 productCard card'>
            <Card.Body>
                <img className="productimage" src={imageUrl} alt={_id} />
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{format} Gramos</p>
                <p>{price} Euros</p>
                <Link to={`/products/details/${_id}`} >
                    <p>Ver detalles</p>
                </Link>
                {user && user.role === 'ADMIN' &&
                    <Link to={`/products/edit/${_id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                }
                {user && user.role === 'ADMIN' &&
                    <Button variant="outline-danger" onClick={() => deleteProduct(_id)}>Eliminar</Button>
                }
            </Card.Body>
        </Card>


    )
}

export default ProductCard