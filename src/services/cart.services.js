import axios from 'axios'

class CartService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createCart(cartData) {
        return this.api.post('/createCart', cartData)
    }

    getCart(cart_id) {
        return this.api.get(`/getCart/${cart_id}`)
    }

    editCart(cart_id, data) {
        return this.api.put(`/editQuantity/:${cart_id}`, data)
    }

    deleteCart(cart_id) {
        return this.api.delete(`/delete/${cart_id}`)
    }
}

const cartService = new CartService()

export default cartService