import { useEffect, useState } from "react"
import productsService from "../../services/products.services"
import ProductsList from "../../components/ProductsList/ProductsList"

import { Container, Button } from 'react-bootstrap'


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        productsService
            .getProducts()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <h1>My Products</h1>
            <Container>
                {
                    <>
                        <h1>Listado de Products</h1>
                        <hr />
                        <ProductsList products={products} />
                    </>
                }
            </Container>


        </>
    )
}

export default Products



