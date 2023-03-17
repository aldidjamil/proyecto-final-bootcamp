import recipesService from "../../services/recipes.services"
import { Link } from 'react-router-dom'
import { Card, Button, ButtonGroup } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import "../RecipeCard/RecipeCard.css"

const RecipeCard = ({ title, imageUrl, _id, setRecipes, steps, owner }) => {

    const { user } = useContext(AuthContext)

    const deleteRecipe = (recipe_id) => {
        recipesService
            .deleteRecipe(recipe_id)
            .then(() => recipesService.getRecipes())
            .then(({ data }) => setRecipes(data))
            .catch(err => console.log(err))
    }


    return (
        <Card className='mb-5 recipeCard card'>
            <Card.Body>
                <img className="recipeImage" src={imageUrl} alt={_id} />
                <h2>{title}</h2>
                <Link to={`/recipes/details/${_id}`} >
                    <p>Ver detalles</p>
                </Link>

                <ButtonGroup className="my-2">
                    {user?.role === 'ADMIN' &&
                        <>
                            <Link to={`/recipes/edit/${_id}`} >
                                <Button className="mx-1" variant="outline-warning">Editar</Button>
                            </Link>
                            <Link>
                                <Button className="mx-1" variant="outline-danger" onClick={() => deleteRecipe(_id)}>Eliminar</Button>
                            </Link>
                        </>
                    }
                </ButtonGroup>

                <ButtonGroup className="my-2">
                    {user?._id === owner &&
                        <>
                            <Link to={`/recipes/edit/${_id}`} >
                                <Button className="mx-1" variant="outline-warning">Editar</Button>
                            </Link>
                            <Link>
                                <Button className="mx-1" variant="outline-danger" onClick={() => deleteRecipe(_id)}>Eliminar</Button>
                            </Link>
                        </>
                    }
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard