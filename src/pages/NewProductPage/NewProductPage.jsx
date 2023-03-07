import NewProductForm from "../../components/NewProductForm/NewProductForm"
import { useNavigate } from "react-router-dom"


const NewProductPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/')
    }

    return (
        <>
            <NewProductForm fireFinalActions={fireFinalActions} />
        </>
    )
}

export default NewProductPage