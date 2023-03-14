import { Row, Col } from 'react-bootstrap'

const Store = () => {

    return (
        <>
            <h1 align="center" className="p-3">Bienvenidos a la tienda!</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store