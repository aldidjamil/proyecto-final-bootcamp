import axios from 'axios'

class ProductService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getProducts() {
        return this.api.get('/getAllProducts') //DONE
    }

    getOneProduct(product_id) { //DONE
        return this.api.get(`/${product_id}`)
    }

    getProductByOwner() {
        return this.api.get('/owner')
    }

    saveProduct(productData) {
        return this.api.post('/addProduct', productData)  //DONE
    }

    editProduct(product_id, data) { //DONE
        return this.api.put(`/edit/${product_id}`, data)
    }

    updateStock(product_id, stock) {
        return this.api.put(`/updateStock/${product_id}`, stock)
    }

    deleteProduct(product_id) {
        return this.api.delete(`/delete/${product_id}`)
    }
}

const productsService = new ProductService()

export default productsService