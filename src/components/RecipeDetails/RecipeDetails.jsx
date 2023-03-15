import { useEffect, useState } from "react"
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import recipesService from "../../services/recipes.services"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


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
        <Card className="text-center object-fit-cover bg-light border-0 rounded">
            <Card.Header className="bg-light"> <h1>{recipes.title}</h1></Card.Header>
            <Card.Body>
                <Card.Img variant="top object-fit-cover" src={recipes.imageUrl} alt="" className="custom-img" />
                <Card.Text>
                    <p className="text-uppercase font-weight-bold"> INGREDIENTES
                        {recipes.ingredients.map(elm =>
                            <li key={elm} className="list"> {elm}</li>)

                        }
                    </p>
                    <p className="text-uppercase font-weight-bold">
                        PASOS
                        {recipes.steps.map(elm =>
                            <li key={elm.description} className="list"> {elm.description}</li>)

                        }
                    </p>
                </Card.Text>
                <Link>
                    <Button onClick={() => navigate(-1)} variant="dark">Volver atrás</Button>
                </Link>
            </Card.Body>
            {/* <Card.Footer className="text-muted">Receta publicada por: {recipes.owner.username}</Card.Footer> */}
        </Card>
    )
}

export default RecipeDetails