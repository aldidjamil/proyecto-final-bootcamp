import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productsServices from './../../services/products.services'
import { useNavigate } from "react-router-dom";

const EditProductForm = () => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        format: "",
        stock: "",
        imageUrl: ''
    })

    useEffect(() => {
        console.log(productData)
    }, [productData])

    const navigate = useNavigate()

    const { product_id } = useParams()

    const handleInputChange = e => {
        const { value, name } = e.target
        setProductData({ ...productData, [name]: value })
    }

    useEffect(() => {
        getOneProduct(product_id)
    }, [])

    const getOneProduct = (product_id) => {
        productsServices
            .getOneProduct(product_id)
            .then(({ data }) => setProductData(data))
            .catch(err => (console.log(err)))
    }

    const handleProductSubmit = e => {
        e.preventDefault()

        productsServices
            .editProduct(product_id, productData)
            .then(({ data }) => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleProductSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" name="title" value={productData.title} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={productData.description} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imageUrl" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="format">
                    <Form.Label>Formato</Form.Label>
                    <Form.Control type="text" name="format" value={productData.format} onChange={handleInputChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" name="stock" value={productData.stock} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit">Editar Producto</Button>
        </Form>
    );
}

export default EditProductForm