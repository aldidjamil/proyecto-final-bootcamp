import { useEffect, useState, useContext } from "react"
import productsService from "../../services/products.services"
import ProductsList from "../../components/ProductsList/ProductsList"
import { Link } from "react-router-dom"
import NewProductForm from "../../components/NewProductForm/NewProductForm"
import { Container, Button, Modal } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"

const Products = () => {

    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        productsService
            .getProducts()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadProducts()
    }

    return (

        <Container>

            <h1>Listado de Productos</h1>
            <Button className="px-5 mx-5 justify-content-center" onClick={() => navigate(-1)} variant="outline-dark">Volver</Button>
            {user && user.role === 'ADMIN' &&
                <Button onClick={() => setShowModal(true)} variant="outline-dark">Crear nuevo Producto</Button>
            }
            <hr />
            <ProductsList products={products} />


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Nuevo Producto</Modal.Title></Modal.Header>
                <Modal.Body>
                    <NewProductForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </Container>

    )
}

export default Products



