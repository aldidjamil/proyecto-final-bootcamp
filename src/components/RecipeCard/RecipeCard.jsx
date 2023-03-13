import recipesService from "../../services/recipes.services"
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"


const RecipeCard = ({ title, imageUrl, _id, setRecipes, steps }) => {

    const { user } = useContext(AuthContext)

    const deleteRecipe = (recipe_id) => {
        recipesService
            .deleteRecipe(recipe_id)
            .then(() => {
                return recipesService.getRecipes()
            })
            .then(({ data }) => setRecipes(data))
            .catch(err => console.log(err))
    }


    return (
        <Card className='mb-5 productCard'>
            <Card.Body>
                <img src={imageUrl} alt={_id} />
                <h1>{title}</h1>
                <Link to={`/recipes/details/${_id}`} >
                    <p>Ver detalles</p>
                </Link>
                {user && user.role === 'ADMIN' &&
                    <Link to={`/recipes/edit/${_id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                }
                {user && user.role === 'ADMIN' &&
                    <Button variant="outline-danger" onClick={() => deleteRecipe(_id)}>Eliminar</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default RecipeCard