<<<<<<< HEAD
import { useContext, useEffect } from "react"
=======
>>>>>>> 6cc39caf9077d05cdbfbebb5fd36637b9f212e52
import { Link } from "react-router-dom"
import productsService from "../../services/products.services"
import { AuthContext } from "../../contexts/auth.context"
import { Card } from "react-bootstrap"
import './ProductCard.css'


<<<<<<< HEAD

const ProductCard = ({ title, description, imageUrl, format, _id, owner, price, setProducts }) => {

    const { user } = useContext(AuthContext)
=======
const ProductCard = ({ title, description, imageUrl, format, _id, setProducts }) => {

>>>>>>> 6cc39caf9077d05cdbfbebb5fd36637b9f212e52

    const deleteProduct = (product_id) => {
        productsService
            .deleteProduct(product_id)
            .then(() => {
                return productsService.getProducts()
            })
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }

    return (
<<<<<<< HEAD
        <Card className='mb-5 productCard'>
            <Card.Body>
                <img src={imageUrl} alt={_id} />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{format} Gramos</p>
                <p>{price} Euros</p>

                <Link to={`/products/details/${_id}`} >
                    <p>Ver detalles</p>
                </Link>
                <Link to={`/products/edit/${_id}`} >
                    <button>Editar</button>
                </Link>
                <button onClick={() => deleteProduct(_id)}>Eliminar</button>
                {user._id === owner && <button onClick={() => deleteProduct(_id)}>Eliminar</button>}
            </Card.Body>
        </Card>


=======
        <>
            <img src={imageUrl} alt={_id} />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{format} Gramos</p>
            <Link to={`/products/details/${_id}`} >
                <p>Ver detalles</p>
            </Link>
            <Link to={`/products/edit/${_id}`} >
                <button>Editar</button>
            </Link>
            <button onClick={() => deleteProduct(_id)}>Eliminar</button>
        </>
>>>>>>> 6cc39caf9077d05cdbfbebb5fd36637b9f212e52
    )
}

export default ProductCard