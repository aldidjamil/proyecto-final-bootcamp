import RecipesList from "../../components/RecipesList/RecipesList"
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

const Recipes = () => {

    return (

        <>
            <Container>
                {
                    <>
                        <h1>Recetas de BeanBased</h1>
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



