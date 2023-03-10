import RecipeCard from "../RecipeCard/RecipeCard"
import { Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import recipesService from "../../services/recipes.services"

const RecipesList = () => {


    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getAllRecipes()
    }, [])

    const getAllRecipes = () => {
        recipesService
            .getRecipes()
            .then(({ data }) => {
                setRecipes(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <Row>
            {
                recipes.map(elm => {
                    return (

                        <Col md={{ span: 3 }} key={elm._id}>
                            <RecipeCard {...elm} setRecipes={setRecipes} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default RecipesList


