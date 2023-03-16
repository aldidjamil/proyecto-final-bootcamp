import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import recipesService from "../../services/recipes.services";
import uploadServices from "../../services/upload.services";

const EditRecipeForm = () => {

    const navigate = useNavigate()

    const [recipeData, setRecipeData] = useState({
        title: '',
        imageUrl: '',
        steps: [{
            description: ''
        }],
        ingredients: [""]
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { recipe_id } = useParams()

    useEffect(() => {
        getOneRecipe(recipe_id)
    }, [])

    const getOneRecipe = (recipe_id) => {
        recipesService
            .getOneRecipe(recipe_id)
            .then(({ data }) => setRecipeData(data))
            .catch(err => console.log(err))
    }


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

    let addFormFieldsIngredients = () => {

        let ingredientsCopy = JSON.parse(JSON.stringify(recipeData.ingredients))
        ingredientsCopy.push('')

        setRecipeData({ ...recipeData, ingredients: ingredientsCopy })
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

    let removeIngredientsFields = (i) => {

        let ingredientsCopy = JSON.parse(JSON.stringify(recipeData.ingredients))
        ingredientsCopy.splice(i, 1)

        setRecipeData({ ...recipeData, ingredients: ingredientsCopy })
    }

    const handleRecipeSubmit = e => {
        e.preventDefault()

        recipesService
            .editRecipe(recipe_id, recipeData)
            .then(({ data }) => {
                navigate("/recipes")
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
                setLoadingImage(false)
            })
    }

    return (
        <Form onSubmit={handleRecipeSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" name="title" value={recipeData.title} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                < Form.Group as={Col} controlId="description" >
                    <Form.Label>Pasos</Form.Label>
                    {
                        recipeData?.steps?.map((desc, index) => {
                            return (
                                <div key={index}>
                                    <Form.Control type="text" value={desc.description} onChange={e => handleChangeDescription(index, e)} />
                                    <Button variant="dark" type="button" className="mt-2" onClick={() => removeDescriptionFields(index)}>Eliminar</Button>
                                    <hr />
                                </div>
                            )
                        })}

                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsDescription()}>Añadir</Button>
                </Form.Group >

                <Form.Group as={Col} controlId="imageUrl">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imageUrl" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group as={Col} controlId="format">
                    <Form.Label>Ingredientes</Form.Label>
                    {
                        recipeData?.ingredients?.map((ing, index) => {
                            return (
                                <div key={index}>
                                    <Form.Control type="text" value={ing} onChange={e => handleChangeIngredients(index, e)} />
                                    <Button variant="dark" type="button" className="mt-2" onClick={() => removeIngredientsFields(index)}>Eliminar</Button>
                                    <hr />
                                </div>
                            )
                        })}
                    <Button variant="dark" className="mt-2" type="button" onClick={() => addFormFieldsIngredients()}>Añadir</Button>
                </Form.Group>
            </Row>
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Editar Receta'}</Button>

        </Form>
    );
}

export default EditRecipeForm
