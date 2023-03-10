import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"
import { useNavigate } from "react-router-dom"


const NewRecipePage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/recipes')
    }

    return (
        <>
            <NewRecipeForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default NewRecipePage