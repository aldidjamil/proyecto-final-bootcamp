import { useEffect, useState } from "react"
import productsService from "../../services/products.services"
import ProductsList from "../../components/ProductsList/ProductsList"
import { Link } from "react-router-dom"
import NewProductForm from "../../components/NewProductForm/NewProductForm"
import { Container, Button, Modal } from 'react-bootstrap'


const Products = () => {

    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])

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

        <>

            <Container>
                {
                    <>
<<<<<<< HEAD
                        <h1>Productos de BeanBased</h1>
                        <Link to="/NewProductPage">
                            <button>Crear nuevo Producto</button>
                        </Link>
=======
                        <h1>Listado de Products</h1>
                        {/* <Link to="/NewProductPage"> */}
                        <Button onClick={() => setShowModal(true)} variant="outline-dark">Crear nuevo Producto</Button>
                        {/* </Link> */}
>>>>>>> dc052ae682f72cdefc272f2b223656a1046e2374
                        <hr />
                        <ProductsList products={products} />

                    </>
                }
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Nuevo Producto</Modal.Title></Modal.Header>
                <Modal.Body>
                    <NewProductForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>


        </>
    )
}

export default Products



