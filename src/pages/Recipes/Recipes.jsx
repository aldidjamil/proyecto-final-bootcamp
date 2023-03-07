import { useEffect, useState } from "react"
import recipesService from "../../services/recipes.services"
import RecipesList from "../../components/RecipesList/RecipesList"

import { Container } from 'react-bootstrap'

const Recipes = () => {

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

        <>
            <h1>My Recipes</h1>
            <Container>
                {
                    <>
                        <h1>Listado de Recetas</h1>
                        <hr />
                        <RecipesList recipes={recipes} />
                    </>
                }
            </Container>


        </>
    )
}

export default Recipes



