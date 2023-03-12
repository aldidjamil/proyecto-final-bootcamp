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

    getOneRecipe(Recipe_id) {
        return this.api.get(`/Recipe/${Recipe_id}`)
    }

    saveRecipe(recipeData) {
        return this.api.post('/addRecipe', recipeData)
    }

    editRecipe(Recipe_id) {
        return this.api.put(`/edit/${Recipe_id}`)
    }

    updateStock(Recipe_id) {
        return this.api.put(`/updateStock/${Recipe_id}`)
    }

    deleteRecipe(Recipe_id) {
        return this.api.delete(`/delete/${Recipe_id}`)
    }
}

const recipesService = new RecipeService()

export default recipesService