import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    getAllUsers(userData) { //DONE
        return this.api.get('/getAllUsers', userData)
    }

    signup(userData) { //DONE
        return this.api.post('/signup', userData)
    }

    login(userData) { //DONE
        return this.api.post('/login', userData)
    }

    verify = token => { //DONE
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

    delete(user_id, data) {
        return this.api.delete(`/delete/${user_id}`, data)
    }

    edit(user_id, data) { //DONE
        return this.api.put(`/edit/${user_id}`, data)
    }

    getOneUser(user_id) { //DONE
        return this.api.get(`/${user_id}`)
    }

}

const authService = new AuthService()

export default authService