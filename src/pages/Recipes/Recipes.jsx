import RecipesList from "../../components/RecipesList/RecipesList"
import { Link, useNavigate } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'

const Recipes = () => {
    const navigate = useNavigate()
    return (

        <Container>
            {
                <>
                    <h1>Recetas de BeanBased</h1>
                    <Button className="px-5 mx-5 justify-content-center" onClick={() => navigate(-1)} variant="outline-dark">Volver</Button>
                    <Link to={'/NewRecipePage'}>
                        <Button variant="outline-dark">Crear Recetas</Button>
                    </Link>
                    <hr />
                    <RecipesList />
                </>
            }
        </Container>

    )
}

export default Recipes



