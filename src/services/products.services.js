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

    getOneProduct(Product_id) { //DONE
        return this.api.get(`/${Product_id}`)
    }

    getProductByOwner() {
        return this.api.get('/owner')
    }

    saveProduct(productData) {
        return this.api.post('/addProduct', productData)  //DONE
    }

    editProduct(Product_id, data) { //DONE
        return this.api.put(`/edit/${Product_id}`, data)
    }

    updateStock(Product_id, stock) {
        return this.api.put(`/updateStock/${Product_id}`, stock)
    }

    deleteProduct(Product_id) {
        return this.api.delete(`/delete/${Product_id}`)
    }
}

const productsService = new ProductService()

export default productsService