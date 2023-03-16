import { useEffect, useState } from "react"
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import recipesService from "../../services/recipes.services"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './RecipeDetails.css'



const RecipeDetails = () => {

    const [recipes, setRecipes] = useState({
        title: "",
        imageUrl: "",
        ingredients: [],
        steps: [],
        owner: ""
    })
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
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Card className="text-center">
                <Card.Header> <h1>{recipes.title}</h1></Card.Header>
                <Card.Body>
                    <Card.Title> <img className="recipeDetaisImage" src={recipes.imageUrl} alt="" />  </Card.Title>
                    <Card.Text>
                        <p> INGREDIENTES
                            {recipes.ingredients.map(elm =>
                                <li key={elm} className="list"> {elm}</li>)
                            }
                        </p>
                        <p>
                            PASOS
                            {recipes.steps.map(elm =>
                                <li key={elm.description} className="list"> {elm.description}</li>)
                            }
                        </p>
                    </Card.Text>
                    <Link>
                        <Button onClick={() => navigate(0)} variant="dark">Volver atrás</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Receta publicada por: {recipes.owner}</Card.Footer>
            </Card>
        </>
    )







}

export default RecipeDetails