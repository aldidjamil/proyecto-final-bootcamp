import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import productsService from "../../services/products.services"
import { AuthContext } from "../../contexts/auth.context"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './ProductCard.css'



const ProductCard = ({ title, description, imageUrl, format, _id, owner, price, setProducts, }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()



    const deleteProduct = (product_id) => {
        productsService
            .deleteProduct(product_id)
            .then(() => {
                return productsService.getProducts()
            })
            .then((data) => setProducts(data))
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
                <Link to={`/products/edit/${_id}`} >
                    <Button variant="outline-warning">Editar</Button>
                </Link>
                <Button variant="outline-danger" onClick={() => deleteProduct(_id)}>Eliminar</Button>
                {user._id === owner && <Button variant="outline-danger" onClick={() => deleteProduct(_id)}>Eliminar</Button>}
                <Link to="javascript:history.back()"><Button variant="outline-dark">Volver</Button></Link>
            </Card.Body>
        </Card>


    )
}

export default ProductCard