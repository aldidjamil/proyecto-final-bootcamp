import ProductCard from "../ProductCard/ProductCard"
import { Col, Row } from "react-bootstrap"

const ProductsList = ({ products }) => {

    return (
        <Row className="mb-5">
            {
                products.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <ProductCard {...elm} />
                        </Col>
                    )
                })
            }
            <h3 >Hacemos tempeh no pasteurizado; fresco, que tiene una vida util de 7 días en refrigeración, y congelado, que tiene 6 meses de vida util. </h3>
            <h4>    Una vez descongelado, hay que consumirlo en 3 días. </h4>
            <h4> <b>Debido la característica de la fermentación natural, es común encontrar algunos puntitos negros en el tempeh y decoloración.</b></h4>
        </Row>
    )
}

export default ProductsList


