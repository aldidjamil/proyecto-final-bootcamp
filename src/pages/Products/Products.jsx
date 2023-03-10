import { useEffect, useState } from "react"
import productsService from "../../services/products.services"
import ProductsList from "../../components/ProductsList/ProductsList"
import { Link } from "react-router-dom"

import { Container } from 'react-bootstrap'


const Products = () => {

    return (

        <>
            <h1>My Products</h1>
            <Container>
                {
                    <>
                        <h1>Listado de Products</h1>
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



