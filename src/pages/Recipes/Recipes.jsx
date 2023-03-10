import RecipesList from "../../components/RecipesList/RecipesList"
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

const Recipes = () => {

    return (

        <>
            <h1>My Recipes</h1>
            <Container>
                {
                    <>
                        <h1>Listado de Recetas</h1>
                        <hr />
                        <Link to={'/NewRecipePage'}>
                            <button>Crear Recetas</button>
                        </Link>
                        <RecipesList />
                    </>
                }
            </Container>


        </>
    )
}

export default Recipes



