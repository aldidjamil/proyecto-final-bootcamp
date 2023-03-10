import UserCard from "../UserCard/UserCard"
import { Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import authService from "../../services/auth.services"





const UserList = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = () => {
        authService
            .getAllUsers()
            .then(({ data }) => { setUsers(data) })
            .catch(err => console.los(err))
    }

    return (

        <Row>
            {
                users.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <UserCard {...elm} setUsers={setUsers} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default UserList