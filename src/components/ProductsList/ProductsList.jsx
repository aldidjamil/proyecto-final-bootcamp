import ProductCard from "../ProductCard/ProductCard"
import { Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import productsService from "../../services/products.services"



const ProductsList = () => {

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
    console.log(products)
    return (
        <Row>
            {
                products.map(elm => {
                    return (

                        <Col md={{ span: 3 }} key={elm._id}>
                            <ProductCard {...elm} setProducts={setProducts} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ProductsList


