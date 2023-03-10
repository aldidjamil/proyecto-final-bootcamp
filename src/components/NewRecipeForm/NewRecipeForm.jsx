import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import recipesServices from '../../services/recipes.services'

const NewRecipeForm = ({ fireFinalActions }) => {

    const [recipeData, setRecipeData] = useState({
        title: '',
        imageUrl: ''
    })

    const [descriptionArray, setDescriptionArray] = useState([])

    let handleChangeDescription = (i, e) => {
        let newDescriptionArray = [...descriptionArray]
        newDescriptionArray[i][e.target.name] = e.target.value
        setDescriptionArray(newDescriptionArray)
    }

    let addFormFieldsDescription = () => {
        setDescriptionArray([...descriptionArray, { Paso: "" }])
    }

    let removeDescriptionFields = (i) => {
        let newDescriptionArray = [...descriptionArray]
        newDescriptionArray.splice(i, 1)
        setDescriptionArray(newDescriptionArray)
    }

    const [ingredientsArray, setIngredientsArray] = useState([])

    let handleChangeIngredients = (i, e) => {
        let newIngredientsArray = [...ingredientsArray]
        newIngredientsArray[i][e.target.name] = e.target.value
        setIngredientsArray(newIngredientsArray)
    }

    let addFormFieldsIngredients = () => {
        setIngredientsArray([...ingredientsArray, { Ingrediente: "" }])
    }

    let removeIngredientsFields = (i) => {
        let newIngredientsArray = [...ingredientsArray]
        newIngredientsArray.splice(i, 1)
        setIngredientsArray(newIngredientsArray)
    }


    const handleInputChange = (e) => {

        const { value, name } = e.target
        setRecipeData({ ...recipeData, [name]: value })
    }

    const handleRecipeSubmit = e => {
        e.preventDefault()

        recipesServices
            .saveRecipe({ ...recipeData, description: descriptionArray, ingredients: ingredientsArray })
            .then(({ data }) => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            <Form onSubmit={handleRecipeSubmit}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" name="title" value={recipeData.title} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    {descriptionArray.map((element, index) => {
                        return (
                            <div key={index}>

                                <Form.Control type="text" key={index} name="description" value={element.description || ""} onChange={e => handleChangeDescription(index, e)} />
                                <Button variant="dark" type="button" className="mt-2" onClick={() => removeDescriptionFields(index)}>Eliminar</Button>

                            </div>
                        )
                    })}
                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsDescription()}>Añadir</Button>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Ingredientes</Form.Label>
                    {ingredientsArray.map((element, index) => {
                        return (
                            <div key={index}>
                                <Form.Control type="text" key={index} name="ingredients" value={element.ingredients || ""} onChange={e => handleChangeIngredients(index, e)} />
                                <Button variant="dark" type="button" className="mt-2" onClick={() => removeIngredientsFields(index)}>Remove</Button>

                            </div>
                        )
                    })}
                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsIngredients()}>Añadir</Button>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="imageUrl">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" name="imageUrl" value={recipeData.imageUrl} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="owner">
                        <Form.Label>Receta publicada por:</Form.Label>
                        <Form.Control type="text" name="owner" value={recipeData.owner || ""} onChange={handleInputChange} />
                    </Form.Group>

                </Row>


                <Button variant="dark" type="submit">Crear nueva receta</Button>
            </Form>


        </>

    );
}

export default NewRecipeForm