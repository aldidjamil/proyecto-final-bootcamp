import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import recipesService from "../../services/recipes.services";

const EditRecipeForm = () => {

    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        ingredients: "",
        imageUrl: ''
    })

    useEffect(() => {
        getOneRecipe(recipe_id)
    }, [])

    const getOneRecipe = (recipe_id) => {
        recipesService
            .getOneRecipe(recipe_id)
            .then(({ data }) => {
                setRecipeData(data)
                console.log(data.description)
                console.log(data.ingredients)
                descriptionData = data.description
                ingredientsData = data.ingredients
            })
            .catch(err => (console.log(err)))
    }

    // useEffect(() => {
    //     console.log(recipeData)
    // }, [recipeData])

    const [descriptionData, setDescriptionData] = useState('')

    const [ingredientsData, setIngredientsData] = useState('')

    const navigate = useNavigate()

    const { recipe_id } = useParams()

    const handleInputChange = e => {
        const { value, name } = e.target
        setRecipeData({ ...recipeData, [name]: value })
        if (name.startsWith('description-')) {
            const index = parseInt(name.split('-')[1])
            const newDescriptions = [...recipeData.description]
            newDescriptions[index] = value
            setDescriptionData({ ...recipeData, description: newDescriptions })
        }
    }

    let addFormFieldsDescription = () => {
        setDescriptionData([...recipeData.description, { Paso: "" }])
    }
    let addFormFieldsIngredients = () => {
        setIngredientsData([...recipeData.ingredients, { Paso: "" }])
    }

    const handleRecipeSubmit = e => {
        e.preventDefault()

        recipesService
            .editRecipe(recipe_id, recipeData)
            .then(({ data }) => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleRecipeSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" name="title" value={recipeData.title} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                < Form.Group as={Col} controlId="description" >
                    <Form.Label>Descripción</Form.Label>
                    {
                        Array.isArray(recipeData.description) && recipeData.description.map((desc, index) => (
                            <Form.Control type="text" name={`description-${index}`} value={desc.description} onChange={handleInputChange} key={`description-${index}`} />
                        ))
                    }
                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsDescription()}>Añadir</Button>
                </Form.Group >

                <Form.Group as={Col} controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imageUrl" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="format">
                    <Form.Label>Ingredientes</Form.Label>
                    {
                        Array.isArray(recipeData.ingredients) && recipeData.ingredients.map((elm, index) => (
                            <Form.Control type="text" name={`description-${index}`} value={elm.ingredients} onChange={handleInputChange} key={`ingredients-${index}`} />
                        ))
                    }
                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsIngredients()}>Añadir</Button>
                </Form.Group>
            </Row>
            <Button variant="dark" type="submit">Editar Producto</Button>

        </Form>
    );
}

export default EditRecipeForm
