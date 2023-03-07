import RecipeCard from "../RecipeCard/RecipeCard"
import { Col, Row } from "react-bootstrap"


const RecipesList = ({ recipes }) => {
    console.log(recipes)
    return (
        <Row>
            {
                recipes.map(elm => {
                    return (

                        <Col md={{ span: 3 }} key={elm._id}>
                            <RecipeCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default RecipesList


