import { useEffect, useState } from "react"
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import recipesService from "../../services/recipes.services"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './RecipeDetails.css'



const RecipeDetails = () => {

    const [recipes, setRecipes] = useState({ title: "", imageUrl: "", ingredients: [], steps: [], owner: "" })
    const navigate = useNavigate()
    const { recipe_id } = useParams()

    useEffect(() => {
        loadRecipeData()
    }, [])

    const loadRecipeData = () => {
        recipesService
            .getOneRecipe(recipe_id)
            .then(({ data }) => {
                setRecipes(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>

            <Card className="text-center">
                <Card.Header> <h1>{recipes.title}</h1></Card.Header>
                <Card.Body>
                    <Container className="textonrecipe">
                        <Card.Title> <img className="recipeimagedetails" src={recipes.imageUrl} alt="" />  </Card.Title>
                        <Card.Text className="mx-5">
                            <p> <b>INGREDIENTES</b>
                                {recipes.ingredients.map(elm =>
                                    <li key={elm} className="list"> {elm}</li>)

                                }
                            </p>
                            <p>
                                <b> PASOS</b>
                                {recipes.steps.map(elm =>
                                    <li key={elm.description} className="list"> {elm.description}</li>)

                                }
                            </p>
                        </Card.Text>
                        <Link>
                            <Button onClick={() => navigate(0)} variant="dark">Volver atrás</Button>
                        </Link>
                    </Container>
                </Card.Body>
                <Card.Footer className="text-muted">Receta publicada por: {recipes.owner}</Card.Footer>
            </Card>


        </>
    )
}

export default RecipeDetails