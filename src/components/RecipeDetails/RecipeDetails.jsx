import { useEffect, useState } from "react"
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import recipesService from "../../services/recipes.services"
import { Link } from "react-router-dom";



const RecipeDetails = () => {

    const [recipes, setRecipes] = useState({})

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
                    <Card.Title> <img src={recipes.imageUrl} alt="" />  </Card.Title>
                    <Card.Text>
                        {/* <p> INGREDIENTES
                            {recipes.ingredients.map(elm =>
                                <li key={elm} className="list"> {elm}</li>)

                            }
                        </p> */}
                    </Card.Text>
                    <Link to='javascript:history.back()'>
                        <Button variant="dark">Volver atrás</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Receta publicada por: {recipes.owner}</Card.Footer>
            </Card>


        </>
    )
}

export default RecipeDetails