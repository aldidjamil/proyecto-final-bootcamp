import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import productsServices from './../../services/products.services'

const NewProductForm = ({ fireFinalActions }) => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        format: 0,
        stock: 0,
        imageUrl: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setProductData({ ...productData, [name]: value })
    }

    const handleProductSubmit = e => {
        e.preventDefault()

        productsServices
            .saveProduct(productData)
            .then(({ data }) => {
                fireFinalActions()
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
                    <Form.Control type="file" name="imageUrl" value={productData.imageUrl} onChange={handleInputChange} />
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

            <Button variant="dark" type="submit">Crear nuevo producto</Button>
        </Form>
    );
}

export default NewProductForm