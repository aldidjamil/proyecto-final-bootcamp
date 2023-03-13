import axios from 'axios'

class RecipeService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/recipes`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getRecipes() {
        return this.api.get('/getAllRecipes')
    }

    getOneRecipe(recipe_id) {
        return this.api.get(`/Recipe/${recipe_id}`)
    }

    getRecipeByOwner() {
        return this.api.get('/owner')
    }
    saveRecipe(recipeData) {
        return this.api.post('/addRecipe', recipeData)
    }

    editRecipe(recipe_id, data) {
        return this.api.put(`/edit/${recipe_id}`, data)
    }

    deleteRecipe(recipe_id) {
        return this.api.delete(`/delete/${recipe_id}`)
    }
}

const recipesService = new RecipeService()

export default recipesService