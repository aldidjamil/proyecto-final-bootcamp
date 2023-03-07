import axios from 'axios'

class ProductService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`
        })
    }

    getProducts() {
        return this.api.get('/getAllProducts') //DONE
    }

    getOneProduct(Product_id) {
        return this.api.get(`/getOneProduct/${Product_id}`)
    }

    saveProduct(productData) {
        return this.api.post('/addProduct', productData)  //DONE
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

const productsService = new ProductService()

export default productsService