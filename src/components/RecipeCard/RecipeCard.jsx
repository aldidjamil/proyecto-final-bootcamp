import recipesService from "../../services/recipes.services"
import { Link } from 'react-router-dom'



const RecipeCard = ({ title, imageUrl, _id, setRecipes, steps }) => {

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
        <>
            <img src={imageUrl} alt={_id} />
            <h1>{title}</h1>
            <Link to={`/recipes/details/${_id}`} >
                <p>Ver detalles</p>
            </Link>
            <Link to={`/recipes/edit/${_id}`} >
                <button>Editar</button>
            </Link>
            <button onClick={() => deleteRecipe(_id)}>Eliminar</button>
        </>
    )
}

export default RecipeCard