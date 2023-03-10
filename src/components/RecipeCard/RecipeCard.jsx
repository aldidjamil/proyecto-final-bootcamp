import recipesService from "../../services/recipes.services"
import { Link } from 'react-router-dom'



const RecipeCard = ({ title, imageUrl, _id, setRecipes, description }) => {

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
            <ol>{description.map((elm, i) =>
                <li key={i}>{elm.description}</li>
            )}</ol>
            {/* <p>{ingredients} Gramos</p> */}
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