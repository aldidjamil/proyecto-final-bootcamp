import RecipesList from "../../components/RecipesList/RecipesList"
import { Link } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'

const Recipes = () => {

    return (

        <>
            <Container>
                {
                    <>
                        <h1>Recetas de BeanBased</h1>
                        <Link to={'/NewRecipePage'}>
                            <Button variant="outline-dark">Crear Recetas</Button>
                        </Link>
                        <hr />
                        <RecipesList />
                    </>
                }
            </Container>


        </>
    )
}

export default Recipes



