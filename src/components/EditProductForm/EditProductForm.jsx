import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productsServices from './../../services/products.services'
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.services";


const EditProductForm = () => {

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        format: "",
        stock: "",
        imageUrl: '',
        price: ''
    })
    const [loadingImage, setLoadingImage] = useState(false)
    useEffect(() => {
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
            <Row className="mb-3">

                <Form.Group className="mb-3" controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" name="stock" value={productData.stock} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" value={productData.price} onChange={handleInputChange} />
                </Form.Group>
            </Row>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Editar Producto'}</Button>
        </Form>
    );
}

export default EditProductForm