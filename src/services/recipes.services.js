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

    getOneRecipe(Product_id) {
        return this.api.get(`/Recipe/${Product_id}`)
    }

    saveRecipe(recipeData) {
        return this.api.post('/saveRecipe', recipeData)
    }

    editProduct(Product_id) {
        return this.api.put(`/edit/${Product_id}`)
    }

    updateStock(Product_id) {
        return this.api.put(`/updateStock/${Product_id}`)
    }

    deleteProduct(Product_id) {
        return this.api.delete(`/delete/${Product_id}`)
    }
}

const recipesService = new RecipeService()

export default recipesService