import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import recipesServices from '../../services/recipes.services'
import FormError from "../FormError/FormError";
import uploadServices from "../../services/upload.services";

const NewRecipeForm = ({ fireFinalActions }) => {

    const [recipeData, setRecipeData] = useState({
        title: '',
        imageUrl: '',
        steps: [{
            description: ''
        }],
        ingredients: [""]
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])



    let handleChangeDescription = (i, e) => {

        let stepsCopy = JSON.parse(JSON.stringify(recipeData.steps))
        stepsCopy[i].description = e.target.value

        setRecipeData({ ...recipeData, steps: stepsCopy })
    }


    let addFormFieldsDescription = () => {

        let stepsCopy = JSON.parse(JSON.stringify(recipeData.steps))
        stepsCopy.push({ description: '' })

        setRecipeData({ ...recipeData, steps: stepsCopy })
    }

    let removeDescriptionFields = (i) => {

        let stepsCopy = JSON.parse(JSON.stringify(recipeData.steps))
        stepsCopy.splice(i, 1)

        setRecipeData({ ...recipeData, steps: stepsCopy })
    }


    const handleInputChange = e => {
        const { value, name } = e.target
        setRecipeData({ ...recipeData, [name]: value })
    }

    let handleChangeIngredients = (i, e) => {
        let ingredientsCopy = JSON.parse(JSON.stringify(recipeData.ingredients))
        ingredientsCopy[i] = e.target.value

        setRecipeData({ ...recipeData, ingredients: ingredientsCopy })
    }

    let addFormFieldsIngredients = () => {

        let ingredientsCopy = JSON.parse(JSON.stringify(recipeData.ingredients))
        ingredientsCopy.push("")

        setRecipeData({ ...recipeData, ingredients: ingredientsCopy })
    }

    let removeIngredientsFields = (i) => {

        let ingredientsCopy = JSON.parse(JSON.stringify(recipeData.ingredients))
        ingredientsCopy.splice(i, 1)

        setRecipeData({ ...recipeData, ingredients: ingredientsCopy })
    }



    const handleRecipeSubmit = e => {
        e.preventDefault()

        recipesServices
            .saveRecipe(recipeData)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }
    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadServices
            .uploadimage(formData)
            .then(res => {
                setRecipeData({ ...recipeData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }



    return (
        <>
            <div className="container mb-5 pb-5">
                <Form className="mb-5" onSubmit={handleRecipeSubmit}>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" name="title" value={recipeData.title} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        {recipeData.steps.map((element, index) => {
                            return (
                                <div key={index}>
                                    <Form.Control type="text" key={index} name="description" value={element.description || ""} onChange={e => handleChangeDescription(index, e)} />
                                    <Button variant="dark" type="button" className="mt-2" onClick={() => removeDescriptionFields(index)}>Eliminar</Button>

                                </div>
                            )
                        })}
                        <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsDescription()}>Añadir</Button>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ingredients">
                        <Form.Label>Ingredientes</Form.Label>
                        {recipeData.ingredients.map((element, index, arr) => {
                            console.log("QUIEN COÑO ES EL ELEMENGT", element)
                            return (
                                <div key={index}>
                                    <Form.Control type="text" key={index} name="ingredients" value={arr[index] || ""} onChange={e => handleChangeIngredients(index, e)} />
                                    <Button variant="dark" type="button" className="mt-2" onClick={() => removeIngredientsFields(index)}>Remove</Button>

                                </div>
                            )
                        })}
                        <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsIngredients()}>Añadir</Button>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="imageUrl">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="owner">
                            <Form.Label>Receta publicada por:</Form.Label>
                            <Form.Control key="owner" type="text" name="owner" value={recipeData.owner || ""} onChange={handleInputChange} />
                        </Form.Group>

                    </Row>
                    {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Crear nueva receta'}</Button>

                </Form>

            </div>

        </>

    );
}

export default NewRecipeForm