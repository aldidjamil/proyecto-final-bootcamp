import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import uploadServices from "../../services/upload.services";
import productsServices from './../../services/products.services'
import FormError from "../FormError/FormError"

const NewProductForm = ({ fireFinalActions }) => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        format: 0,
        stock: 0,
        imageUrl: '',
        price: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])

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
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadServices
            .uploadimage(formData)
            .then(res => {
                setProductData({ ...productData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
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
                    <Form.Control type="file" onChange={handleFileUpload} />
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
            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={productData.price} onChange={handleInputChange} />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear nuevo producto'}</Button>
        </Form>
    );
}

export default NewProductForm