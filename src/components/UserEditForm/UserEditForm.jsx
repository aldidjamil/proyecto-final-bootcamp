import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import authServices from './../../services/auth.services'
import { useNavigate } from "react-router-dom"
import FormError from "../FormError/FormError"


const UserEditForm = () => {


    const [userData, setUserData] = useState({
        username: '',
        email: '',
    })

    const [errors, setErrors] = useState([])

    useEffect(() => {
        console.log(userData)
    }, [userData])

    const navigate = useNavigate()

    const { user_id } = useParams()

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    useEffect(() => {
        getOneUser(user_id)
    }, [])

    const getOneUser = (user_id) => {
        authServices
            .getOneUser(user_id)
            .then(({ data }) => setUserData(data))
            .catch(err => (console.log(err)))
    }

    const handleUserSubmit = e => {
        e.preventDefault()

        authServices
            .edit(user_id, userData)
            .then(({ data }) => {
                navigate("/")
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (
        <Form onSubmit={handleUserSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" name="username" value={userData.username} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="email">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" name="email" value={userData.email} onChange={handleInputChange} />
                </Form.Group>
            </Row>
            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}
            <Button variant="dark" type="submit">Enviar</Button>
        </Form>
    );
}

export default UserEditForm