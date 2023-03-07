import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`
        })
    }
    getAllUsers(userData) {
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

    delete(userData) {
        return this.api.delete('/delete/:_id', userData)
    }

    edit(userData) {
        return this.api.put('/edit/:_id', userData)
    }

}

const authService = new AuthService()

export default authService