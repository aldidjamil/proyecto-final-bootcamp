import { useEffect, useState } from "react"
import productsService from "../../services/products.services"
import ProductsList from "../../components/ProductsList/ProductsList"
import { Link } from "react-router-dom"

import { Container } from 'react-bootstrap'


const Products = () => {

    return (

        <>

            <Container>
                {
                    <>
                        <h1>Productos de BeanBased</h1>
                        <Link to="/NewProductPage">
                            <button>Crear nuevo Producto</button>
                        </Link>
                        <hr />
                        <ProductsList />
                    </>
                }
            </Container>


        </>
    )
}

export default Products



